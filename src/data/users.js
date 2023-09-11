class User {
  constructor(username, email, phone, password, userType = "user") {
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.userType = userType;
  }
}

export const createUser = (username, email, phone, password, userType) => {
  return new User(username, email, phone, password, userType);
};

export const users = [
  createUser(
    "Muhammad Selim",
    "muhammadselim@owlstore.com",
    "01554211531",
    "12345678",
    "admin"
  ),
  createUser(
    "Ahmad Zahran",
    "ahmedzhran876@gmail.com",
    "201554211531",
    "987654321",
    "user"
  ),
  createUser(
    "Kareem Khalaf",
    "kareemkhalaf1722@gmail.com",
    "201554211531",
    "0258456",
    "user"
  ),
];
