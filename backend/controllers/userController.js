import asyncHandler from 'express-async-handler';

// Auth user/set token
const authUser = asyncHandler(async(req, res) => {
    res.status(401);

    throw new Error('Something went wrong');

    res.status(200).json({ message: 'Auth User' });
});

export {
    authUser
}