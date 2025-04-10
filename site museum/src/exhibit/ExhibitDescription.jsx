export default function ExhibitDescription({ description }) {
  return (
    <div>
      <h1>{description.title}</h1>

      <div>
        {description.bits.map(bit => {
          return <ExhibitDescriptionItem
            name={bit.name}
            content={bit.content}
          />;
        })}
      </div>

      <ExhibitFilters filters={description.filters} />
    </div>
  );
}

function ExhibitDescriptionItem({ name, content }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>{content}</p>
    </div>
  );
}

function ExhibitFilters({ filters }) {
  return (
    <div>
      {filters.map(item => {
        return (
          <div>
            <label>{item.name}</label>
            <div>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
}
