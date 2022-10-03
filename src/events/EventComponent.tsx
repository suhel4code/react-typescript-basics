const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('changes', event);
  };
  const onDrag = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('Drag', event);
  };
  return (
    <div>
      Event Understanding
      <input onChange={onChange} />
      <div draggable onDrag={onDrag}>
        {' '}
        drag me
      </div>
    </div>
  );
};

export default EventComponent;
