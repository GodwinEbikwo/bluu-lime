import styled from "styled-components";

export default function ProductOptions({
  name,
  values,
  selectedOptions,
  setOptions,
}) {
  return (
    <FieldForm>
      <legend className="text-uppercase">{name}</legend>
      <div className="inline-flex flex-wrap align-center">
        {values.map((value) => {
          const id = `option-${name}-${value}`;
          const checked = selectedOptions[name] === value;
          const shortenValue = value.charAt(0);
          return (
            <label key={id} htmlFor={id}>
              <input
                className="sr-only absolute overflow-hidden"
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
                <span className="px-2">{shortenValue}</span>
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
    letter-spacing: 0.035em;
    font-weight: 600;
    font-size: 0.875rem;
  }

  .sr-only {
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .field-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    cursor: pointer;
    margin-top: 0.75rem;
    text-transform: uppercase;
    transition: all 300ms ease;
    margin-right: calc(0.75rem - 1px);
    overflow: hidden;
    width: 48px;
    height: 48px;
  }

  .active {
    color: var(--white);
    border: 2px solid var(--accent);
  }

  .inactive {
    color: var(--white);
    background: transparent;
    border: 1px solid var(--border-color);
    transform: translateZ(0) scale(1);
    transition: transform 300ms var(--easing);

    &:hover {
      transform: translateZ(0) scale(1.12);
      border: 1px solid var(--accent);
    }
  }
`;
