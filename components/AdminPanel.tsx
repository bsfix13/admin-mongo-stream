"use client";
import React, { useState, useEffect } from 'react';
import { Table } from '../components/ui/table';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Pencil, Trash2, Plus, Film, Users, Search } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";

interface Movie {
  _id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
  password?: string;
}

const genres = [
  'Comedy', 'Drama', 'Action', 'Documentary', 'Horror', 'Sci-Fi', 'Romance', 'Thriller'
];
const roles = ['admin', 'user', 'editor'];
const statuses = ['active', 'inactive', 'suspended'];

export default function AdminPanel() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [users, setUsers] = useState<User[]>([]); 

  const [movieSearch, setMovieSearch] = useState('');
  const [userSearch, setUserSearch] = useState('');

  const [isAddMovieDialogOpen, setIsAddMovieDialogOpen] = useState(false);
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);
  const [isEditMovieDialogOpen, setIsEditMovieDialogOpen] = useState(false);
  const [isEditUserDialogOpen, setIsEditUserDialogOpen] = useState(false);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [deleteType, setDeleteType] = useState<'movie' | 'user' | null>(null);

  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const [newMovie, setNewMovie] = useState<Omit<Movie, '_id'>>({
    title: '',
    description: '',
    videoUrl: '',
    thumbnailUrl: '',
    genre: '',
    duration: ''
  });

  const [newUser, setNewUser] = useState<Omit<User, '_id' | 'joinDate'>>({
    name: '',
    email: '',
    role: '',
    status: 'active',
    password: ''
  });

  useEffect(() => {
    fetchUsers();
    fetchMovies();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch("/api/movies");
      if (!response.ok) throw new Error('Failed to fetch movies');
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieSearch.toLowerCase()) ||
    movie.description.toLowerCase().includes(movieSearch.toLowerCase()) ||
    movie.genre.toLowerCase().includes(movieSearch.toLowerCase())
  );

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(userSearch.toLowerCase()) ||
    user.email.toLowerCase().includes(userSearch.toLowerCase()) ||
    user.role.toLowerCase().includes(userSearch.toLowerCase())
  );

  const handleAddMovie = async () => {
    try {
      const response = await fetch("/api/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMovie),
      });

      if (!response.ok) throw new Error(`Failed to create movie: ${response.statusText}`);
      const createdMovie = await response.json();

      setMovies([...movies, createdMovie]);
      setNewMovie({
        title: '',
        description: '',
        videoUrl: '',
        thumbnailUrl: '',
        genre: '',
        duration: ''
      });
      setIsAddMovieDialogOpen(false);
    } catch (error) {
      console.error("Failed to create movie:", error);
    }
  };

  const handleEditMovie = async () => {
    if (!editingMovie) return;
    try {
      const response = await fetch(`/api/movies?id=${editingMovie._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingMovie),
      });

      if (!response.ok) throw new Error(`Failed to update movie: ${response.statusText}`);
      const updatedMovie = await response.json();

      setMovies(movies.map((movie) => (movie._id === updatedMovie._id ? updatedMovie : movie)));
      setIsEditMovieDialogOpen(false);
      setEditingMovie(null);
    } catch (error) {
      console.error("Failed to update movie:", error);
    }
  };

  const handleDeleteMovie = (_id: string) => {
    setItemToDelete(_id);
    setDeleteType('movie');
    setDeleteDialogOpen(true);
  };

  const handleAddUser = async () => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) throw new Error(`Failed to create user: ${response.statusText}`);
      const createdUser = await response.json();

      setUsers([...users, createdUser]);
      setNewUser({
        name: '',
        email: '',
        role: '',
        status: 'active',
        password: ''
      });
      setIsAddUserDialogOpen(false);
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  const handleEditUser = async () => {
    if (!editingUser) return;
    try {
      const response = await fetch(`/api/users?id=${editingUser._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingUser),
      });

      if (!response.ok) throw new Error(`Failed to update user: ${response.statusText}`);
      const updatedUser = await response.json();

      setUsers(users.map((user) => (user._id === updatedUser._id ? updatedUser : user)));
      setIsEditUserDialogOpen(false);
      setEditingUser(null);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const handleDeleteUser = (_id: string) => {
    setItemToDelete(_id);
    setDeleteType('user');
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!itemToDelete || !deleteType) return;

    try {
      const response = await fetch(`/api/${deleteType}s?id=${itemToDelete}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error(`Failed to delete ${deleteType}`);

      if (deleteType === 'movie') {
        setMovies(movies.filter((m) => m._id !== itemToDelete));
      } else if (deleteType === 'user') {
        setUsers(users.filter((u) => u._id !== itemToDelete));
      }
    } catch (error) {
      console.error(`Failed to delete ${deleteType}:`, error);
    }

    setDeleteDialogOpen(false);
    setItemToDelete(null);
    setDeleteType(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'inactive':
        return 'bg-gray-500';
      case 'suspended':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const SearchBar = ({
    value,
    onChange,
    placeholder
  }: {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
  }) => (
    <div className="flex items-center space-x-2 mb-4">
      <Search className="w-5 h-5 text-gray-500" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="max-w-sm"
      />
    </div>
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <Tabs defaultValue="movies" className="space-y-4">
        <TabsList>
          <TabsTrigger value="movies" className="flex items-center gap-2">
            <Film size={16} />
            Movies
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users size={16} />
            Users
          </TabsTrigger>
        </TabsList>

        <TabsContent value="movies">
          <div className="flex justify-between items-center mb-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Movie Management</h2>
              <SearchBar
                value={movieSearch}
                onChange={setMovieSearch}
                placeholder="Search movies..."
              />
            </div>
            <Button
              onClick={() => setIsAddMovieDialogOpen(true)}
              className="flex items-center gap-2"
            >
              <Plus size={16} />
              Add Movie
            </Button>
          </div>
          <div className="border rounded-lg">
            <Table>
              <thead>
                <tr>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Genre</th>
                  <th className="px-4 py-2">Duration</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMovies.map((movie) => (
                  <tr key={movie._id}>
                    <td className="px-4 py-2">{movie.title}</td>
                    <td className="px-4 py-2">{movie.description}</td>
                    <td className="px-4 py-2">{movie.genre}</td>
                    <td className="px-4 py-2">{movie.duration}</td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            setEditingMovie(movie);
                            setIsEditMovieDialogOpen(true);
                          }}
                        >
                          <Pencil size={16} />
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDeleteMovie(movie._id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="users">
          <div className="flex justify-between items-center mb-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">User Management</h2>
              <SearchBar
                value={userSearch}
                onChange={setUserSearch}
                placeholder="Search users..."
              />
            </div>
            <Button
              onClick={() => setIsAddUserDialogOpen(true)}
              className="flex items-center gap-2"
            >
              <Plus size={16} />
              Add User
            </Button>
          </div>
          <div className="border rounded-lg">
            <Table>
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Join Date</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user._id}>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">
                      <Badge variant="secondary">{user.role}</Badge>
                    </td>
                    <td className="px-4 py-2">
                      <Badge
                        variant="outline"
                        className={`${getStatusColor(user.status)} text-white`}
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-2">{user.joinDate}</td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditingUser(user);
                            setIsEditUserDialogOpen(true);
                          }}
                        >
                          <Pencil size={16} />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteUser(user._id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      <Dialog
        open={isAddMovieDialogOpen}
        onOpenChange={setIsAddMovieDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Movie</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">Title</Label>
              <Input
                id="title"
                className="col-span-3"
                value={newMovie.title}
                onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Description</Label>
              <Input
                id="description"
                className="col-span-3"
                value={newMovie.description}
                onChange={(e) =>
                  setNewMovie({...newMovie, description: e.target.value})
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="videoUrl" className="text-right">Video URL</Label>
              <Input
                id="videoUrl"
                className="col-span-3"
                value={newMovie.videoUrl}
                onChange={(e) =>
                  setNewMovie({...newMovie, videoUrl: e.target.value})
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="thumbnailUrl" className="text-right">Thumbnail URL</Label>
              <Input
                id="thumbnailUrl"
                className="col-span-3"
                value={newMovie.thumbnailUrl}
                onChange={(e) =>
                  setNewMovie({...newMovie, thumbnailUrl: e.target.value})
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="genre" className="text-right">Genre</Label>
              <Select 
                onValueChange={(value) => setNewMovie({...newMovie, genre: value})}
                value={newMovie.genre}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select genre" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="duration" className="text-right">Duration</Label>
              <Input
                id="duration"
                className="col-span-3"
                value={newMovie.duration}
                onChange={(e) =>
                  setNewMovie({...newMovie, duration: e.target.value})
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddMovie}>Add Movie</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isAddUserDialogOpen}
        onOpenChange={setIsAddUserDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input
                id="name"
                className="col-span-3"
                value={newUser.name}
                onChange={(e) => setNewUser({...newUser, name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">Email</Label>
              <Input
                id="email"
                type="email"
                className="col-span-3"
                value={newUser.email}
                onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">Role</Label>
              <Select 
                onValueChange={(value) => setNewUser({...newUser, role: value})}
                value={newUser.role}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">Password</Label>
              <Input
                id="password"
                type="password"
                className="col-span-3"
                value={newUser.password}
                onChange={(e) => setNewUser({...newUser, password: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddUser}>Add User</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {editingMovie && (
        <Dialog
          open={isEditMovieDialogOpen}
          onOpenChange={setIsEditMovieDialogOpen}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Movie</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-title" className="text-right">Title</Label>
                <Input
                  id="edit-title"
                  className="col-span-3"
                  value={editingMovie.title}
                  onChange={(e) =>
                    setEditingMovie({ ...editingMovie, title: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-description" className="text-right">
                  Description
                </Label>
                <Input
                  id="edit-description"
                  className="col-span-3"
                  value={editingMovie.description}
                  onChange={(e) =>
                    setEditingMovie({
                      ...editingMovie,
                      description: e.target.value
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-videoUrl" className="text-right">Video URL</Label>
                <Input
                  id="edit-videoUrl"
                  className="col-span-3"
                  value={editingMovie.videoUrl}
                  onChange={(e) =>
                    setEditingMovie({
                      ...editingMovie,
                      videoUrl: e.target.value
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-thumbnailUrl" className="text-right">
                  Thumbnail URL
                </Label>
                <Input
                  id="edit-thumbnailUrl"
                  className="col-span-3"
                  value={editingMovie.thumbnailUrl}
                  onChange={(e) =>
                    setEditingMovie({
                      ...editingMovie,
                      thumbnailUrl: e.target.value
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-genre" className="text-right">Genre</Label>
                <Select
                  onValueChange={(value) =>
                    setEditingMovie({ ...editingMovie, genre: value })
                  }
                  value={editingMovie.genre}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    {genres.map((genre) => (
                      <SelectItem key={genre} value={genre}>
                        {genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-duration" className="text-right">Duration</Label>
                <Input
                  id="edit-duration"
                  className="col-span-3"
                  value={editingMovie.duration}
                  onChange={(e) =>
                    setEditingMovie({
                      ...editingMovie,
                      duration: e.target.value
                    })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleEditMovie}>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {editingUser && (
        <Dialog open={isEditUserDialogOpen} onOpenChange={setIsEditUserDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit User</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">Name</Label>
                <Input
                  id="edit-name"
                  className="col-span-3"
                  value={editingUser.name}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, name: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-email" className="text-right">Email</Label>
                <Input
                  id="edit-email"
                  type="email"
                  className="col-span-3"
                  value={editingUser.email}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, email: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-role" className="text-right">Role</Label>
                <Select
                  onValueChange={(value) =>
                    setEditingUser({ ...editingUser, role: value })
                  }
                  value={editingUser.role}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>{role}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="text-right">Status</Label>
                <Select
                  onValueChange={(value) =>
                    setEditingUser({ ...editingUser, status: value })
                  }
                  value={editingUser.status}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>{status}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleEditUser}>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the {deleteType}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
