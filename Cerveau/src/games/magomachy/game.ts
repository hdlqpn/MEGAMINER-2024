import { BaseGameRequiredData } from "~/core/game";
import { BaseClasses } from "./";
import { MagomachyGameManager } from "./game-manager";
import { GameObject } from "./game-object";
import { MagomachyGameSettingsManager } from "./game-settings";
import { Player } from "./player";
import { Tile } from "./tile";
import { Mutable } from "@cadre/ts-utils";

// <<-- Creer-Merge: imports -->>
// any additional imports you want can be placed here safely between creer runs
type MutableTile = Mutable<Tile>;
// <<-- /Creer-Merge: imports -->>

/**
 * Wizards fight to the death.
 */
export class MagomachyGame extends BaseClasses.Game {
    /** The manager of this game, that controls everything around it. */
    public readonly manager!: MagomachyGameManager;

    /** The settings used to initialize the game, as set by players. */
    public readonly settings = Object.freeze(this.settingsManager.values);

    /**
     * The player whose turn it is currently. That player can send commands.
     * Other players cannot.
     */
    public currentPlayer!: Player;

    /**
     * The current turn number, starting at 0 for the first player's turn.
     */
    public currentTurn!: number;

    /**
     * A mapping of every game object's ID to the actual game object. Primarily
     * used by the server and client to easily refer to the game objects via ID.
     */
    public gameObjects!: { [id: string]: GameObject };

    /**
     * The number of Tiles in the map along the y (vertical) axis.
     */
    public readonly mapHeight!: number;

    /**
     * The number of Tiles in the map along the x (horizontal) axis.
     */
    public readonly mapWidth!: number;

    /**
     * The maximum number of turns before the game will automatically end.
     */
    public readonly maxTurns!: number;

    /**
     * List of all the players in the game.
     */
    public players!: Player[];

    /**
     * A unique identifier for the game instance that is being played.
     */
    public readonly session!: string;

    /**
     * All the tiles in the map, stored in Row-major order. Use `x + y *
     * mapWidth` to access the correct index.
     */
    public tiles!: Tile[];

    /**
     * The amount of time (in nano-seconds) added after each player performs a
     * turn.
     */
    public readonly timeAddedPerTurn!: number;

    /**
     * List of wizard choices.
     */
    public wizards!: string[];

    // <<-- Creer-Merge: attributes -->>

    // Any additional member attributes can go here
    // NOTE: They will not be sent to the AIs, those must be defined
    // in the creer file.

    // <<-- /Creer-Merge: attributes -->>

    /**
     * Called when a Game is created.
     *
     * @param settingsManager - The manager that holds initial settings.
     * @param required - Data required to initialize this (ignore it).
     */
    constructor(
        protected settingsManager: MagomachyGameSettingsManager,
        required: Readonly<BaseGameRequiredData>,
    ) {
        super(settingsManager, required);

        // <<-- Creer-Merge: constructor -->>
        // setup any thing you need here


        // init map for testing
        for (let i = 0; i < this.mapWidth * this.mapHeight; i++) {
            const x = i % this.mapWidth;
            const y = Math.floor(i / this.mapWidth);

            // this.manager.create.tile({});

            // TODO Manually create arrays of tiles/strings for different maps
            const tile = (this.tiles[i] as MutableTile);

            tile.type = (x === 0 || x === this.mapWidth - 1 ||
            y === 0 || y === this.mapHeight - 1)
                ? "wall"
                : "floor";
            }

        // TEMP init wizards for testing
        this.players[0].wizard = this.manager.create.wizard({
            owner: this.players[0],
            health: 10,
            aether: 10,
            tile: this.getTile(1, Math.floor(this.mapHeight) / 2),
            specialty: "aggressive",
            speed: 1
        });

        this.players[0].wizard.tile!.wizard = this.players[0].wizard;

        this.players[1].wizard = this.manager.create.wizard({
            owner: this.players[1],
            health: 10,
            aether: 10,
            tile: this.getTile(this.mapWidth - 2, Math.floor(this.mapHeight) / 2),
            specialty: "sustaining",
            speed: 1
        });

        this.players[1].wizard.tile!.wizard = this.players[1].wizard;

        // <<-- /Creer-Merge: constructor -->>
    }

    // <<-- Creer-Merge: public-functions -->>

    // Any public functions can go here for other things in the game to use.
    // NOTE: Client AIs cannot call these functions, those must be defined
    // in the creer file.

    // <<-- /Creer-Merge: public-functions -->>

    /**
     * Gets the tile at (x, y), or undefined if the co-ordinates are off-map.
     *
     * @param x - The x position of the desired tile.
     * @param y - The y position of the desired tile.
     * @returns The Tile at (x, y) if valid, undefined otherwise.
     */
    public getTile(x: number, y: number): Tile | undefined {
        return super.getTile(x, y) as Tile | undefined;
    }

    // <<-- Creer-Merge: protected-private-functions -->>

    // Any additional protected or pirate methods can go here.

    // <<-- /Creer-Merge: protected-private-functions -->>
}
