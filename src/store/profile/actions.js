export const CHANGE_CHECKBOX = 'PROFILE::CHANGE_CHECKBOX';
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const changeCheckbox = {
  type: CHANGE_CHECKBOX,
}

export const changeName = (name) => ({
  type: CHANGE_NAME,
  name
});