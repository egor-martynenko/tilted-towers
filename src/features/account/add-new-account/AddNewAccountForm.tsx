'use client';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Field } from '@/shared/ui/components/Field/Field';

type FormData = {
  accountTitle: string;
  tags: string[];
  price: number;
  skins: number;
  level: number;
  emotes: number;
  gliders: number;
  vbucks: number;
  pickaxes: number;
  backpacks: number;
  images: string[];
};

export const AddNewAccountForm = () => {
  const [images, setImages] = useState<File[]>([]);

  const { register, handleSubmit, control, setValue, watch } =
    useForm<FormData>({
      defaultValues: {
        tags: [],
      },
    });

  const tags = watch('tags');
  const [tagError, setTagError] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim();
    if (!trimmedTag) {
      setTagError('Tag cannot be empty.');
      return;
    }
    if (tags.includes(trimmedTag)) {
      setTagError('This tag is already added.');
      return;
    }
    const newTags = [...tags, trimmedTag];
    setValue('tags', newTags);
    setTagError(null);
  };

  const removeTag = (tag: string) => {
    const newTags = tags.filter(t => t !== tag);
    setValue('tags', newTags);
  };

  const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImages(prev => [...prev, ...filesArray]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="pt-24 mx-auto max-w-8xl px-6 py-20 lg:px-8 text-white">
      <h2 className="text-3xl">Add New Account</h2>
      <form className="mr-auto pt-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-3 md:gap-8">
          <div>
            <Field
              label="Account Title"
              name="accountTitle"
              type="text"
              register={register}
              required
            />

            <div className="relative z-0 w-full mb-5 group">
              <Controller
                name="tags"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      type="text"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                      placeholder="Add a tag and press Enter"
                      onKeyDown={e => {
                        if (e.key === 'Enter' && e.currentTarget.value) {
                          e.preventDefault();
                          addTag(e.currentTarget.value);
                          e.currentTarget.value = '';
                        }
                      }}
                    />
                    {tagError && (
                      <p className="text-red-500 text-sm mt-1">{tagError}</p>
                    )}
                    <ul className="flex flex-wrap gap-1 py-4 border-b-2 mt-6">
                      {field.value?.map((tag: string) => (
                        <li
                          key={tag}
                          className="px-2 py-1.5 bg-slate-800 rounded-xl flex items-center"
                        >
                          {tag}
                          <button
                            type="button"
                            className="ml-2 text-red-500"
                            onClick={() => removeTag(tag)}
                          >
                            ×
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="images"
                className="cursor-pointer text-white bg-amber-600 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
              >
                Add Images
              </label>
              <input
                id="images"
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImagesChange}
              />
              <div className="flex flex-wrap gap-4 mt-4">
                {images.map((image, index) => (
                  <div key={index} className="relative w-24 h-24">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-0 right-0 text-red-600 bg-white rounded-full p-1"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <Field
              label="Price, USD"
              name="price"
              type="number"
              register={register}
              required={true}
            />
          </div>

          <div>
            <Field
              label="Outfits/Skins"
              name="skins"
              type="number"
              register={register}
              required={true}
            />
            <Field
              label="Account Level"
              name="level"
              type="number"
              register={register}
              required={true}
            />
            <Field
              label="Emotes"
              name="emotes"
              type="number"
              register={register}
              required={true}
            />
            <Field
              label="Gliders"
              name="gliders"
              type="number"
              register={register}
              required={true}
            />
          </div>

          <div>
            <Field
              label="V-Bucks"
              name="vbucks"
              type="number"
              register={register}
              required={true}
            />
            <Field
              label="Pickaxes"
              name="pickaxes"
              type="number"
              register={register}
              required={true}
            />
            <Field
              label="Backpacks"
              name="backpacks"
              type="number"
              register={register}
              required={true}
            />
            <Field
              label="Loadings"
              name="loadings"
              type="number"
              register={register}
              required={true}
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-amber-600 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
