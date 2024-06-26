import { z } from 'zod';

const updateReviewerValidationSchema = z.object({
    body: z.object({
        name: z.object({
            firstName: z
                .string()
                .max(20, { message: 'First name should not exceed 20 characters.' })
                .optional(),
            lastName: z
                .string()
                .max(20, { message: 'Last name should not exceed 20 characters.' })
                .optional(),
        }),
        address: z.string().optional(),
        contactNo: z.string().max(11).optional(),
    }),
});

const createReviewerValidationSchema = z.object({
    body: z.object({
        password: z.string().min(6, 'Password must be at least 6 characters'),
        name: z.object({
            firstName: z
                .string()
                .max(20, { message: 'First name should not exceed 20 characters.' }),
            lastName: z.string().max(20, { message: 'Last name should not exceed 20 characters.' }),
        }),
        email: z.string(),
    }),
});

const ReviewValidations = {
    updateReviewerValidationSchema,
    createReviewerValidationSchema,
};

export default ReviewValidations;
