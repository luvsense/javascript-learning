const user = {
  username: 'yash',
  loginCount: 8,
  isSignedIn: true,

  getUserDetails: function () {
    console.log('Got user details from database');
  },
};

console.log(user.username);
console.log(user.getUserDetails());
