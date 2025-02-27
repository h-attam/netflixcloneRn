import * as Yup from 'yup';

const NewListSchema = Yup.object().shape({
  title: Yup.string().required('Zorunlu Alan'),
});

export {NewListSchema};
