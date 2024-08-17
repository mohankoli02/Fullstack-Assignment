import { Card } from "../models/card.model.js";


export const postCard = async(req, res)=>{
    try {
        const { title, description } = req.body;
    
        // Check if required fields are present
        if (!title || !description) {
          return res.status(400).json({
             error: 'Title and description are required',
             success: false
            });
        }
    
        // Check if a card with the same title already exists
        const existingCard = await Card.findOne({ title });
        if (existingCard) {
          return res.status(400).json({ 
            error: 'Title already exists. Please choose a different title.',
            success: false
         });
        }
    
        // Create and save the new card
        const card = new Card({ title, description });
        await card.save();
        res.status(201).json({
            card,
            success:true
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getCards = async(req, res)=>{
    try {
        const cards = await Card.find();
        res.status(200).json({
            cards,
            success: true
        });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getSingleCard = async(req, res)=>{
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (!card) {
          return res.status(404).json({
              error: 'Card not found',
              success: false
            });
        }
        res.status(200).json({
            card,
            success: true
        });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
