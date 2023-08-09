export type TypeSlider = {
  id: string;
  img: string;
  title: string;
  text: string;
};

export type RegisterType = {
  onchangeText: (name: string, value: string) => void;
  onSubmit: () => void;
  form: object;
};
