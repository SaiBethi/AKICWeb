import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const Join = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    const serviceID = 'service_or7fcml';
    const templateID = 'template_pxflfzo';
    const userID = 'CPHqN7f-DZPDfV2HP';

    const formattedData = {
      name: data.name,
      email: data.email,
      grade: data.grade,
      interests: (data.interests || []).join(', '),
      message: data.message || '(No message)'
    };

    emailjs.send(serviceID, templateID, formattedData, userID)
      .then(() => {
        alert('✅ Form sent! Check your email inbox.');
        reset();
      })
      .catch((err) => {
        console.error('❌ EmailJS error:', err);
        alert('There was an error sending your form.');
      });
  };

  return (
    <section className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 text-black">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        Join the Ardrey Kell Investing Club
      </h1>

      {isSubmitSuccessful && (
        <div className="p-3 mb-4 text-sm text-green-700 bg-green-100 rounded">
          ✅ Form submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block font-medium text-sm mb-1">Full Name</label>
          <input
            {...register('name', { required: true })}
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            placeholder="Jane Doe"
          />
          {errors.name && <span className="text-red-500 text-xs">This field is required.</span>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium text-sm mb-1">Email Address</label>
          <input
            {...register('email', { required: true })}
            type="email"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            placeholder="you@example.com"
          />
          {errors.email && <span className="text-red-500 text-xs">This field is required.</span>}
        </div>

        {/* Grade */}
        <div>
          <label className="block font-medium text-sm mb-1">Grade Level</label>
          <select
            {...register('grade', { required: true })}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          >
            <option value="">Select grade</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
          {errors.grade && <span className="text-red-500 text-xs">This field is required.</span>}
        </div>

        {/* Interests */}
        <div>
          <label className="block font-medium text-sm mb-1">Areas of Interest</label>
          <div className="grid grid-cols-2 gap-2 text-sm text-black">
            {['Stocks', 'Crypto', 'AI Tools', 'Economics', 'Entrepreneurship'].map((interest) => (
              <label key={interest} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={interest}
                  {...register('interests')}
                  className="accent-purple-600"
                />
                {interest}
              </label>
            ))}
          </div>
        </div>

        {/* Why Join */}
        <div>
          <p className="block font-medium text-sm mb-1">Why do you want to join?</p>
          <textarea
            {...register('message')}
            rows="3"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            placeholder="Tell us what excites you..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
        >
          Submit Form
        </button>
      </form>
    </section>
  );
};

export default Join;
