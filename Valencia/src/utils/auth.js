// Simple database authentication utilities
const USERS_KEY = 'valencia_users';

// Get all users from localStorage
const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

// Save users to localStorage
const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Register a new user
export const registerUser = (userData) => {
  const users = getUsers();
  
  // Check if user already exists
  const existingUser = users.find(user => user.email === userData.email);
  if (existingUser) {
    throw new Error('User already exists with this email');
  }

  // Create new user
  const newUser = {
    id: Date.now().toString(),
    email: userData.email,
    password: userData.password, // In production, hash this
    fullName: userData.fullName,
    phone: userData.phone,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);
  
  // Return user without password
  const { password, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

// Login user
export const loginUser = (email, password) => {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

// Get user by ID
export const getUserById = (id) => {
  const users = getUsers();
  const user = users.find(u => u.id === id);
  if (user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
};