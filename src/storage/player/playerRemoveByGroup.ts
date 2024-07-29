import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLECTION } from "../storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerRemoveByGroup(playerName: string, group: string) {
    try {
        const storedPlayers = await playersGetByGroup(group);
        const filtered = storedPlayers.filter(player => player.name!== playerName);
        const players = JSON.stringify(filtered);

        await AsyncStorage.setItem(`${PLAYER_COLECTION}-${group}`, players);
        
    } catch (error) {
        throw error;
    }
}