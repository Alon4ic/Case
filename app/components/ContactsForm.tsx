'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
    email: string;
    message: string;
};

const ContactsForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    async function onSubmit(data: FormData) {
        try {
            await sendEmail(data);
            alert('Message sent successfully!');
            reset(); // Очистить форму после успешной отправки
        } catch (error) {
            alert('Failed to send message. Please try again.');
        }
    }

    return (
        <div>
            <p className="text-white contacts-right--text">
                Let\'s talk about our future collaboration.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full contacts-field bg-grayBox border-grayBox py-2 px-3.5 text-base font-medium text-white outline-none rounded-md focus:border-gray-400 focus:shadow-md focus:bg-grayBox focus:text-white"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-500 mt-2">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className="mb-5">
                    <textarea
                        rows={4}
                        placeholder="Message"
                        className="w-full contacts-field bg-grayBox border-grayBox py-2 px-3.5 text-base font-medium text-white outline-none rounded-md focus:border-gray-400 focus:shadow-md"
                        {...register('message', {
                            required: 'Message is required',
                            minLength: {
                                value: 20,
                                message:
                                    'Message must be at least 20 characters long',
                            },
                        })}
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 mt-2">
                            {errors.message.message}
                        </p>
                    )}
                </div>
                <div className="contacts-button">
                    <button
                        type="submit"
                        className="contacts-btn cursor-style text-white"
                    >
                        <img
                            src="../../images/arrow-right.svg"
                            alt="arrow"
                            className="contacts-btn--img mr-2.5"
                        />
                        Send message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactsForm;
