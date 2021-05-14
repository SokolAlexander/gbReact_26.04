import React, { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { store } from "../../store";
import { changeCheckbox, changeName } from "../../store/profile/actions";

// export const Profile = () => {
//   const [value, setValue] = useState("");
//   const name = useSelector((state) => state.profile.name);
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // changeName(value) === { type: "PROFILE::CHANGE_NAME", name: value }
//     dispatch(changeName(value));
//     setValue('');
//   };

//   return (
//     <>
//       <div>This is profile page</div>
//       <div>Hello, {name}</div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={value} onChange={handleChange} />
//         <input type="submit" />
//       </form>
//     </>
//   );
// };

const Profile = (props) => {
  const { name, setNewName } = props;
  const [value, setValue] = useState("");
  // const name = useSelector((state) => state.profile.name);
  // const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(changeName(value));
    setNewName(value);
    setValue('');
  };

  return (
    <>
      <div>This is profile page</div>
      <div>Hello, {name}</div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <input type="submit" />
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  name: state.profile.name,
});

const mapDispatchToProps = {
  setNewName: changeName,
}

export const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);

// const myConnect = (mapStateToProps) => (Component) => () => {
//   <Component {...}/>
// }