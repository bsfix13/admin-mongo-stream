// app/api/movies/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

let client: MongoClient | null = null;

async function getClient() {
  if (!client) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set in your environment variables.");
    }
    client = new MongoClient(process.env.DATABASE_URL);
    await client.connect();
  }
  return client;
}

export async function GET(req: NextRequest) {
  console.log('GET request received for movies:', req.url);

  try {
    const dbClient = await getClient();
    const db = dbClient.db();
    const movies = await db.collection("Movie").find().toArray();
    console.log('Movies fetched:', movies.length);
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return NextResponse.json({ error: "Failed to fetch movies" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  console.log('POST request received for movies:', req.url);

  try {
    const dbClient = await getClient();
    const db = dbClient.db();
    const body = await req.json();
    console.log('Request body:', body);

    const insertResult = await db.collection("Movie").insertOne(body);
    const newMovie = await db.collection("Movie").findOne({ _id: insertResult.insertedId });
    console.log('New movie created:', newMovie);
    return NextResponse.json(newMovie, { status: 201 });
  } catch (error) {
    console.error("Failed to create movie:", error);
    return NextResponse.json({ error: "Failed to create movie" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  console.log('DELETE request received for movies:', req.url);

  const id = req.nextUrl.searchParams.get('id');
  console.log('Movie ID to delete:', id);

  if (!id) {
    console.error('Movie ID not provided');
    return NextResponse.json({ error: 'Movie ID not provided' }, { status: 400 });
  }

  try {
    const dbClient = await getClient();
    const db = dbClient.db();
    const result = await db.collection("Movie").deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 1) {
      console.log('Movie deleted successfully');
      return NextResponse.json({ message: 'Movie deleted successfully' }, { status: 200 });
    } else {
      console.error('Movie not found');
      return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Failed to delete movie:', error);
    return NextResponse.json({ error: 'Failed to delete movie' }, { status: 500 });
  }
}

// You might want to add a PUT or PATCH method for updating movies
export async function PUT(req: NextRequest) {
  console.log('PUT request received for movies:', req.url);

  const id = req.nextUrl.searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Movie ID not provided' }, { status: 400 });
  }

  try {
    const dbClient = await getClient();
    const db = dbClient.db();
    const body = await req.json();
    
    const result = await db.collection("Movie").updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
    }

    const updatedMovie = await db.collection("Movie").findOne({ _id: new ObjectId(id) });
    return NextResponse.json(updatedMovie, { status: 200 });
  } catch (error) {
    console.error("Failed to update movie:", error);
    return NextResponse.json({ error: "Failed to update movie" }, { status: 500 });
  }
}
