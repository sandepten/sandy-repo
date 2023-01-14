import { Formik } from "formik";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Camera } from "phosphor-react";

const EditProfile: NextPage = () => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between py-8">
        <Link href="/profile">
          <ArrowLeft size={24} />
        </Link>
        <p className="text-xl font-semibold">Profile</p>
        <ArrowLeft size={24} color="rgb(229 231 235)" />
      </div>
      <div className="relative mx-auto mt-2 mb-8 w-fit">
        <Image
          src="/default-profile.jpg"
          alt="Profile image"
          width={100}
          height={100}
          className="h-24 w-24 rounded-[50%] bg-white object-cover p-1 shadow-xl shadow-gray-400/60"
        />
        <div className="absolute -top-2 -right-2 inline-block rounded-full border-4 border-white bg-purple-500 p-1.5">
          <Camera size={18} color="#fff" />
        </div>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          bio: "",
        }}
        validate={(values) => {
          const errors = {
            name: "",
            email: "",
            phone: "",
            bio: "",
          };
          if (!values.name) {
            errors.name = "Required";
          } else if (values.name.length > 15) {
            errors.name = "Must be 15 characters or less";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-base font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className={`border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500 ${
                    errors.name && " border-red-500"
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <span className="text-red-600 text-sm">
                  {errors.name && touched.name && errors.name}
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-base font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className={`border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500 ${
                    errors.email && " border-red-500"
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span className="text-red-600 text-sm">
                  {errors.email && touched.email && errors.email}
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="phone" className="text-base font-semibold">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone"
                  className={`border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500 ${
                    errors.phone && " border-red-500"
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                <span className="text-red-600 text-sm">
                  {errors.phone && touched.phone && errors.phone}
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="bio" className="text-base font-semibold">
                  Bio
                </label>
                <textarea
                  name="bio"
                  id="bio"
                  placeholder="Enter your bio"
                  className={`border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-500 ${
                    errors.bio && " border-red-500"
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bio}
                />
                <span className="text-red-600 text-sm">
                  {errors.bio && touched.bio && errors.bio}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white rounded-md py-2 font-semibold"
            >
              Save
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;
