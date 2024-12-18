import { BaseGameObjectRequiredData } from "~/core/game";
import {
    BaseMagomachyPlayer,
    PlayerChooseWizardArgs,
    PlayerConstructorArgs,
} from "./";
import { AI } from "./ai";
import { GameObject } from "./game-object";
import { Player } from "./player";
import { Wizard } from "./wizard";

// <<-- Creer-Merge: imports -->>
// any additional imports you want can be placed here safely between creer runs
// <<-- /Creer-Merge: imports -->>

/**
 * A player in this game. Every AI controls one player.
 */
export class Player extends GameObject implements BaseMagomachyPlayer {
    /** The AI controlling this Player. */
    public readonly ai!: AI;

    /**
     * What type of client this is, e.g. 'Python', 'JavaScript', or some other
     * language. For potential data mining purposes.
     */
    public readonly clientType!: string;

    /**
     * If the player lost the game or not.
     */
    public lost!: boolean;

    /**
     * The name of the player.
     */
    public readonly name!: string;

    /**
     * This player's opponent in the game.
     */
    public readonly opponent!: Player;

    /**
     * The reason why the player lost the game.
     */
    public reasonLost!: string;

    /**
     * The reason why the player won the game.
     */
    public reasonWon!: string;

    /**
     * The amount of time (in ns) remaining for this AI to send commands.
     */
    public timeRemaining!: number;

    /**
     * The specific wizard owned by the player.
     */
    public wizard!: Wizard;

    /**
     * If the player won the game or not.
     */
    public won!: boolean;

    // <<-- Creer-Merge: attributes -->>

    // Any additional member attributes can go here
    // NOTE: They will not be sent to the AIs, those must be defined
    // in the creer file.

    /**
     * The choice of wizard the player wants.
     */
    public wizardChoice?: WizardSpecialty;

    // <<-- /Creer-Merge: attributes -->>

    /**
     * Called when a Player is created.
     *
     * @param args - Initial value(s) to set member variables to.
     * @param required - Data required to initialize this (ignore it).
     */
    constructor(
        // never directly created by game developers
        args: PlayerConstructorArgs,
        required: Readonly<BaseGameObjectRequiredData>,
    ) {
        super(args, required);

        // <<-- Creer-Merge: constructor -->>
        // setup any thing you need here
        // <<-- /Creer-Merge: constructor -->>
    }

    // <<-- Creer-Merge: public-functions -->>

    // Any public functions can go here for other things in the game to use.
    // NOTE: Client AIs cannot call these functions, those must be defined
    // in the creer file.
    public health(): number {
        return this.wizard.health;
    }

    public aether(): number {
        return this.wizard.aether;
    }

    // <<-- /Creer-Merge: public-functions -->>

    /**
     * Invalidation function for chooseWizard. Try to find a reason why the
     * passed in parameters are invalid, and return a human readable string
     * telling them why it is invalid.
     *
     * @param player - The player that called this.
     * @param wizardClass - The class of wizard the player wants.
     * @returns If the arguments are invalid, return a string explaining to
     * human players why it is invalid. If it is valid return nothing, or an
     * object with new arguments to use in the actual function.
     */
    protected invalidateChooseWizard(
        player: Player,
        wizardClass: string,
    ): void | string | PlayerChooseWizardArgs {
        // <<-- Creer-Merge: invalidate-chooseWizard -->>

        // Check all the arguments for chooseWizard here and try to
        // return a string explaining why the input is wrong.
        // If you need to change an argument for the real function, then
        // changing its value in this scope is enough.

        if (this.wizardChoice) {
            return 'You are already a ${wizardChoice}';
        }
        
        if (wizardClass !== "aggressive"
            && wizardClass !== "defensive"
            && wizardClass !== "sustaining"
            && wizardClass !== "strategic") {
            return '${wizardClass} is not a valid wizard choice!';
        }
        
        return undefined; // means nothing could be found that was ivalid.

        // <<-- /Creer-Merge: invalidate-chooseWizard -->>
    }

    /**
     * This is called when you need to pick your wizard class.
     *
     * @param player - The player that called this.
     * @param wizardClass - The class of wizard the player wants.
     * @returns True if class successfully chosen, false otherwise.
     */
    protected async chooseWizard(
        player: Player,
        wizardClass: string,
    ): Promise<boolean> {
        // <<-- Creer-Merge: chooseWizard -->>

        // Add logic here for chooseWizard.

        // TODO: replace this with actual logic
        this.wizardChoice = wizardClass as WizardSpecialty;
        return true;

        // <<-- /Creer-Merge: chooseWizard -->>
    }

    // <<-- Creer-Merge: protected-private-functions -->>

    // Any additional protected or pirate methods can go here.

    // <<-- /Creer-Merge: protected-private-functions -->>
}
