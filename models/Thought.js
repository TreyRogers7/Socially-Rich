const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,

    },

    createdAt: {
        date: Number,
        
    },

    userName: {
        type: String, 
        required: true,
    },

    reactions: [{
        reactionId: {

        },

        reactionBody: {
            type: String,
            required: true,
            max: 280
        },

        userName: {
            type: String,
            required: true
        },

        createdAt: {
            Date: Number,
            
        }
    }]
});

thoughtSchema.virtual('reactions').get(function () {
    return `${this.reactions.length}`
});