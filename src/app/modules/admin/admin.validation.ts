import { z } from 'zod';

const updateAdminValidationSchema = z.object({
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

const createAdminValidationSchema = z.object({
    body: z.object({
        password: z.string().min(6, 'Password must be at least 6 characters').optional(),

        name: z.object({
            firstName: z
                .string()
                .max(20, { message: 'First name should not exceed 20 characters.' }),
            lastName: z.string().max(20, { message: 'Last name should not exceed 20 characters.' }),
        }),
        address: z.string(),
        email: z.string(),
        contactNo: z.string().max(11),
    }),
});

const AdminValidations = {
    updateAdminValidationSchema,
    createAdminValidationSchema,
};

export default AdminValidations;
