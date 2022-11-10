import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import Column from "./Column";

function App() {
  const [taskList, setTasks] = useState([
    {
      groupName: "Today",
      tasks: [
        { id: "1", title: "Test-1" },
        { id: "2", title: "Test-2" },
      ],
    },
    {
      groupName: "Tomorrow",
      tasks: [
        { id: "3", title: "Test-3" },
        { id: "4", title: "Test-4" },
      ],
    },
  ]);

  function onDragEnd(val) {
    // Your version
    // let result = helper.reorder(val.source, val.destination, taskList);
    // setTasks(result);

    /// A different way!
    const { draggableId, source, destination } = val;
    // console.log("👌 ~ destination", destination);
    if (!destination) return;

    const [sourceGroup] = taskList.filter(
      (column) => column.groupName === source.droppableId
    );

    // Destination might be `null`: when a task is
    // dropped outside any drop area. In this case the
    // task reamins in the same column so `destination` is same as `source`
    const [destinationGroup] = destination
      ? taskList.filter(
          (column) => column.groupName === destination.droppableId
        )
      : { ...sourceGroup };

    // We save the task we are moving
    const [movingTask] = sourceGroup.tasks.filter((t) => t.id === draggableId);

    const newSourceGroupTasks = sourceGroup.tasks.splice(source.index, 1);
    const newDestinationGroupTasks = destinationGroup.tasks.splice(
      destination.index,
      0,
      movingTask
    );

    // Mapping over the task lists means that you can easily
    // add new columns
    const newTaskList = taskList.map((column) => {
      if (column.groupName === source.groupName) {
        return {
          groupName: column.groupName,
          tasks: newSourceGroupTasks,
        };
      }
      if (column.groupName === destination.groupName) {
        return {
          groupName: column.groupName,
          tasks: newDestinationGroupTasks,
        };
      }
      return column;
    });
    setTasks(newTaskList);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Final Space Characters</h1> */}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="wrapper">
            <Column
              className="column"
              droppableId="Today"
              list={taskList[0].tasks}
              type="TASK"
            />
            <Column
              className="column"
              droppableId="Tomorrow"
              list={taskList[1].tasks}
              type="TASK"
            />
            <div> context hello world </div>
          </div>
        </DragDropContext>
      </header>
      <p>
        Images from{" "}
        <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">
          Final Space Wiki
        </a>
      </p>
    </div>
  );
}

export default App;
