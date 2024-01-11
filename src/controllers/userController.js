import {User} from "../models/userModel.js"

const createCounter = () => {
  let count = 0;

  return () => {
    count += 1;
    return count;
  };
};

const incrementCounter = createCounter(); // Create a single counter instance

const registerUser = async function (req, res) {
  try {
    const { first_name, last_name, department, Address, dob, salary } = req.body;

    const employee_id = incrementCounter(); // Use the counter to get the next value

    const userData = {
      employee_id,
      first_name,
      last_name,
      department,
      Address,
      dob,
      salary
    };

    const createdUser = await User.create(userData);

    res.status(200).send({ status: true, createdUser, msg: 'Registration successful' });

  } catch (err) {
    console.error(err);
    res.status(500).send({ status: false, msg: 'Internal server error' });
  }
};


const getData = async (req, res) => {
  try {
    const { employee_id } = req.params;

    const user = await User.findOne({ employee_id });

    if (!user) {
      return res.status(404).send({ status: false, msg: 'User not found' });
    }

    res.status(200).send({ status: true, user, msg: 'User found successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).send({ status: false, msg: 'Internal server error' });
  }
};

const updatedUser = async (req, res) => {
  try {
    const { employee_id } = req.params;
    const { first_name, last_name, department, Address, dob, salary } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { employee_id },
      { first_name, last_name, department, Address, dob, salary },
      { new: true } 
    );

    if (!updatedUser) {
      return res.status(404).send({ status: false, msg: 'User not found' });
    }

    res.status(200).send({ status: true, updatedUser, msg: 'User updated successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).send({ status: false, msg: 'Internal server error' });
  }
};

const deleteData = async (req, res) => {
  try {
    const { employee_id } = req.params;

    const deletedUser = await User.findOneAndDelete({ employee_id });

    if (!deletedUser) {
      return res.status(404).send({ status: false, msg: 'User not found' });
    }

    res.status(200).send({ status: true, deletedUser, msg: 'User deleted successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).send({ status: false, msg: 'Internal server error' });
  }
};

const filterByDepartment = async (req, res) => {
  try {
    const { department } = req.params;

    const users = await User.find({ department });

    if (users.length === 0) {
      return res.status(404).send({ status: false, msg: 'No users found' });
    }

    res.status(200).send({ status: true, users, msg: 'Users found' });

  } catch (err) {
    console.error(err);
    res.status(500).send({ status: false, msg: 'Internal server error' });
  }
};

const ascOrder = async (req, res) => {
  try {
    const user = await User.findOne().sort({ salary: 1 });

    if (!user) {
      return res.status(404).send({ status: false, msg: 'No users found' });
    }

    res.status(200).send({ status: true, user, msg: 'Top user by salary in ascending order' });

  } catch (err) {
    console.error(err);
    res.status(500).send({ status: false, msg: 'Internal server error' });
  }
};

const decOrder = async (req, res) => {
  try {
    const user = await User.findOne().sort({ salary: -1 });

    if (!user) {
      return res.status(404).send({ status: false, msg: 'No users found' });
    }

    res.status(200).send({ status: true, user, msg: 'Top user by salary in descending  order' });

  } catch (err) {
    console.error(err);
    res.status(500).send({ status: false, msg: 'Internal server error' });
  }
};



export {registerUser, getData,  updatedUser, deleteData, filterByDepartment, ascOrder, decOrder}