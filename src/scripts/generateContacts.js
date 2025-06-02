import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  const fakeNumber = createFakeContact();
  console.log(fakeNumber);
    writeContacts('num222ber2');
    console.log("d");
    console.log(number);
};

generateContacts(5);
