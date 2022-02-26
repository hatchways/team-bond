import { Field } from 'formik';

const options: { value: string; label: string }[] = [];
for (let i = 0; i < 25; i++) {
  i < 10
    ? options.push({ value: `0${i}:00`, label: `0${i}:00` })
    : options.push({ value: `${i}:00`, label: `${i}:00` });
}
const rows = [
  {
    checkbox: (
      <label>
        <Field type="checkbox" name="sunday" />
      </label>
    ),
    from: (
      <Field disabled="" name="sun-from" component="select">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
    to: (
      <Field name="sun-to" component="select">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
  },
  {
    checkbox: (
      <label>
        <Field type="checkbox" name="monday" />
      </label>
    ),
    from: (
      <Field disabled="" name="mon-from" component="select">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
    to: (
      <Field name="mon-to" component="select">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
  },
  {
    checkbox: (
      <label>
        <Field type="checkbox" name="tuesday" />
      </label>
    ),
    from: (
      <Field disabled="" name="tue-from" component="select">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
    to: (
      <Field name="tue-to" component="select">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
  },
  {
    checkbox: (
      <label>
        <Field type="checkbox" name="wednesday" />
      </label>
    ),
    from: (
      <Field disabled="" name="wed-from" component="select">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
    to: (
      <Field name="wed-to" component="select">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
  },
  {
    checkbox: (
      <label>
        <Field type="checkbox" name="thursday" />
      </label>
    ),
    from: (
      <Field disabled="" name="thurs-from" component="select">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
    to: (
      <Field name="thurs-to" component="select">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
  },
  {
    checkbox: (
      <label>
        <Field type="checkbox" name="friday" />
      </label>
    ),
    from: (
      <Field disabled="" name="fri-from" component="select">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
    to: (
      <Field name="fri-to" component="select">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
  },
  {
    checkbox: (
      <label>
        <Field type="checkbox" name="saturday" />
      </label>
    ),
    from: (
      <Field disabled="" name="sat-from" component="select">
        {options.map((option, i) => {
          return (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
    to: (
      <Field name="sat-to" component="select">
        {options.map((option, i) => {
          return (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Field>
    ),
  },
];

export default rows;
