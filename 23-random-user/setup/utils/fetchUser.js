const URL = "https://randomuser.me/api/";

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  // Destructuring
  const person = data.results[0];
  const { large: image } = person.picture;
  const { first, last } = person.name;
  const { email, phone } = person;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  const { password } = person.login;
  return {
    image,
    name: `${first} ${last}`,
    email,
    street: `${number} ${name}`,
    phone,
    password,
  };
};

export default getUser;
