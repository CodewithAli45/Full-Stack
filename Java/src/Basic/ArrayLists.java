package Basic;

import java.util.ArrayList;
import java.util.List;

public class ArrayLists {
    public static void main(String[] args) {
        List<Integer> list1 = new ArrayList<>();
        list1.add(0, 12);
        list1.add(0, 12);
        list1.add(0, 47);

        List<Integer> list2 = new ArrayList<>();
        list2.add(0, 45);
        list2.add(0, 78);
        list2.add(0, 14);

        List<Integer> list = new ArrayList<>();
        for(int i = 0; i < list1.size(); i++){
            list.add(list1.get(i)  + list2.get(i));
        }

        for(Integer ele : list){
            System.out.print(ele +" ");
        }
    }
}
