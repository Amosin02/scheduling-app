import express from 'express';
import UserData from '../models/data.models.js';

const router = express.Router();

// create a new account
router.post('/', async (req, res) => {
  try {
    const newDate = {
      name: req.body.name,
      birthdate: req.body.birthdate,
    };

    if (!req.body.name || !req.body.birthdate) {
      res
        .status(400)
        .json({ success: false, message: 'Please provide all fields' });
    }

    const dates = await UserData.create(newDate);
    res.status(201).send(dates);
  } catch (error) {
    console.error('Error in entering user:', error.message);
    res
      .status(500)
      .json({ success: false, message: 'Entering User Unsuccessful' });
  }
});

// delete an account
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const accToBeDelete = await UserData.findByIdAndDelete(id);

    if (!accToBeDelete) {
      res.status(400).json({ success: false, message: 'Account not found :(' });
    }

    res
      .status(200)
      .json({ success: true, message: 'Account successfuly deleted' });
  } catch (error) {
    console.error('Error in deleting user:', error.message);
    res
      .status(500)
      .json({ success: false, message: 'Deleting User Unsuccessful' });
  }
});

// get all acc
router.get('/', async (req, res) => {
  try {
    const users = await UserData.find({});

    res.status(200).json({ success: true, count: users.length, users: users });
  } catch (error) {
    console.error('Error in getting users:', error.message);
    res
      .status(500)
      .json({ success: false, message: 'Getting Users Unsuccessful' });
  }
});

// get a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await UserData.findById(userId);

    if (!user) {
      res.status(400).json({ success: false, message: 'Account not found :(' });
    }

    res.status(200).json({ success: true, account: user });
  } catch (error) {
    console.error('Error in getting account:', error.message);
    res
      .status(500)
      .json({ success: false, message: 'Getting Account Unsuccessful' });
  }
});

export default router;
