import useHttp from "../../hooks/use-http";

const NewTask = (props: any) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText: any, taskData: any) => {
    const generatedId = taskData.name;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText: any) => {
    sendTaskRequest(
      {
        url: "url-to-call",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <div>
      <button onClick={enterTaskHandler} />
      {isLoading && <p>{isLoading}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default NewTask;
