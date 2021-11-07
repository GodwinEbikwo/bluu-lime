import styled from "styled-components";

export default function ProductOptions({
  name,
  values,
  selectedOptions,
  setOptions,
}) {
  return (
    <FieldForm>
      <legend>{name}</legend>
      <div className="field-inner">
        {values.map((value) => {
          const id = `option-${name}-${value}`;
          const checked = selectedOptions[name] === value;
          return (
            <label key={id} htmlFor={id}>
              <input
                className="sr-only"
                type="radio"
                id={id}
                name={`option-${name}`}
                value={value}
                checked={checked}
                onChange={() => {
                  setOptions(name, value);
                }}
              />
              <div className={`field-btn ${checked ? "active" : "inactive"}`}>
                <span className="px-2">{value}</span>
              </div>
            </label>
          );
        })}
      </div>
    </FieldForm>
  );
}

const FieldForm = styled.fieldset`
  margin-top: 0.5rem;
  margin-bottom: var(--spacing-md);

  legend {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: var(--ls-md);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .field-inner {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .field-btn {
    width: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 999px;
    cursor: pointer;
    margin-top: 0.75rem;
    margin-right: 0.75rem;
    text-transform: capitalize;
    transition: all 300ms ease;

    &:hover {
      color: black;
      background: white;
    }
  }

  .active {
    color: black;
    background: white;
  }

  .inactive {
    color: white;
    background: gray;
  }
`;
