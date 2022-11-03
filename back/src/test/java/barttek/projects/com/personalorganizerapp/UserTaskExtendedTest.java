package barttek.projects.com.personalorganizerapp;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

class UserTaskExtendedTest {
    @Test
    void creatingBasicUserExtendedTask() {
        int id = 5;
        String name = "Throw garbage";
        String description = "Garbage are in the kitchen, just throw them";

        UserTaskExtended eTask = UserTaskExtended.newBuilder(id, name)
                .withDescription(description)
                .build();

        assertEquals(id, eTask.getId());
        assertEquals(name, eTask.getName());
        assertEquals(description, eTask.getDescription());
        assertFalse(eTask.isCompleted());
    }

    @Test
    void creatingBasicUserExtendedTaskWithSubTasksList() {
        int id = 5;
        String name = "Throw garbage";
        String description = "Garbage are in the kitchen, just throw them";
        List<UserTask> subTasksList = new ArrayList<>();

        subTasksList.add(new UserTask(3, "First garbage"));
        subTasksList.add(new UserTask(5, "Second garbage"));

        UserTaskExtended eTask = UserTaskExtended.newBuilder(id, name)
                .withDescription(description)
                .withSubTasksList(subTasksList)
                .build();

        assertEquals(id, eTask.getId());
        assertEquals(name, eTask.getName());
        assertEquals(description, eTask.getDescription());
        assertFalse(eTask.isCompleted());
        System.out.println(subTasksList);
        assertEquals(subTasksList, eTask.getSubTasksList());
    }

    @Test
    void addingToSubTasksList() {
        UserTask uTask = new UserTask(9, "Feed kitty");
        UserTask uTask1 = new UserTask(10, "Not to feed kitty");

        int id = 5;
        String name = "Throw garbage";
        String description = "Garbage are in the kitchen, just throw them";
        List<UserTask> subTasksList = new ArrayList<>();

        subTasksList.add(new UserTask(3, "First garbage"));
        subTasksList.add(new UserTask(5, "Second garbage"));

        UserTaskExtended eTask = UserTaskExtended.newBuilder(id, name)
                .withDescription(description)
                .withSubTasksList(subTasksList)
                .build();

        eTask.addingToSubTasksList(uTask);
        eTask.addingToSubTasksList(uTask1);

//        add a way to check if it is correct
    }
}