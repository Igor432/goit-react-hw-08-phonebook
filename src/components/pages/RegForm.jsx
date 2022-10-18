import style from './phonebook.module.css'

export const RegForm = () => {
  return (
    <form className={style.regForm}>
        <h3>Please, enter your credentials:</h3>
      <label for="name" >
        Name:
        <input type="text" name="name" />
      </label>
      <label for="email">
        Email:
        <input type="email" name="email" />
      </label>
      <label for="password">
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
