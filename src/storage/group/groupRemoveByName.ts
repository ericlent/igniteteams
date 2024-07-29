import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLECTION, PLAYER_COLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted: string) {
    try {
        const storedGroups = await groupsGetAll();
        const groups = storedGroups.filter(group => group !== groupDeleted);
        await AsyncStorage.setItem(GROUP_COLECTION, JSON.stringify(groups));
        await AsyncStorage.removeItem(`${PLAYER_COLECTION}-${groupDeleted}`);
        
    } catch (error) {
        throw error;
    }
}