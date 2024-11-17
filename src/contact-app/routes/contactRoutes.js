const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const { firstname, lastname, email, phone, company, jobtitle } = req.body;

    const newContact = new Contact({
      firstname,
      lastname,
      email,
      phone,
      company,
      jobtitle,
    });
    await newContact.save();

    res.status(201).json({ message: "Contact created", contact: newContact });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error creating contact", error: err.message });
  }
});

// Get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving contacts", error: err.message });
  }
});

// Update a specific contact by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, email, phone, company, jobtitle } = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { firstname, lastname, email, phone, company, jobtitle },
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res
      .status(200)
      .json({ message: "Contact updated", contact: updatedContact });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error updating contact", error: err.message });
  }
});

// Delete a contact by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res
      .status(200)
      .json({ message: "Contact deleted", contact: deletedContact });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting contact", error: err.message });
  }
});

module.exports = router;
