import React from 'react';
const InputForm = ({ form, setForm, weatherData }) => {
  return (
    <form onSubmit={weatherData}>
      <input
        type="text"
        placeholder="City"
        value={form.city}
        onChange={(e) => setForm({ ...form, city: e.target.value })}
      />
 
      <input
        type="text"
        placeholder="Country"
        value={form.country}
        onChange={(e) => setForm({ ...form, country: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
