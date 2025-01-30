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
  console.log('GET request received:', req.url);

  try {
    const dbClient = await getClient();
    const db = dbClient.db();
    const users = await db.collection("User").find().toArray();
    console.log('Users fetched:', users.length);
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  console.log('POST request received:', req.url);

  try {
    const dbClient = await getClient();
    const db = dbClient.db();
    const body = await req.json();
    console.log('Request body:', body);

    const insertResult = await db.collection("User").insertOne(body);
    const newUser = await db.collection("User").findOne({ _id: insertResult.insertedId });
    console.log('New user created:', newUser);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  console.log('DELETE request received:', req.url);

  const id = req.nextUrl.searchParams.get('id');
  console.log('User ID to delete:', id);

  if (!id) {
    console.error('User ID not provided');
    return NextResponse.json({ error: 'User ID not provided' }, { status: 400 });
  }

  try {
    const dbClient = await getClient();
    const db = dbClient.db();
    const result = await db.collection("User").deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 1) {
      console.log('User deleted successfully');
      return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
    } else {
      console.error('User not found');
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Failed to delete user:', error);
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}
