// WARNING: Here be Dragons
// This file is generated by Creer, do not modify it
// It basically sets up all the classes, interfaces, types, and what-not that
// we need for TypeScript to know the base classes, while allowing for minimal
// code for developers to be forced to fill out.

/* eslint-disable @typescript-eslint/no-empty-interface */

// base game classes
import {
    BaseAI,
    BaseGame,
    BaseGameManager,
    BaseGameObject,
    BaseGameObjectFactory,
    BaseGameSettingsManager,
    BasePlayer,
    makeNamespace,
} from "~/core/game";

// mixins
import {
    TiledPlayer,
    TurnBasedPlayer,
    TwoPlayerPlayer,
    mixTiled,
    mixTurnBased,
    mixTwoPlayer,
} from "~/core/game/mixins";

// extract game object constructor args
import { FirstArgumentFromConstructor } from "~/utils";

/**
 * The interface that the Player for the Magomachy game
 * must implement from mixed in game logic.
 */
export interface BaseMagomachyPlayer
    extends BasePlayer,
        TwoPlayerPlayer,
        TurnBasedPlayer,
        TiledPlayer {}

const base0 = {
    AI: BaseAI,
    Game: BaseGame,
    GameManager: BaseGameManager,
    GameObject: BaseGameObject,
    GameSettings: BaseGameSettingsManager,
};

const base1 = mixTwoPlayer(base0);
const base2 = mixTurnBased(base1);
const base3 = mixTiled(base2);

const mixed = base3;

/** The base AI class for the Magomachy game will mixin logic. */
class BaseMagomachyAI extends mixed.AI {}

/** The base Game class for the Magomachy game will mixin logic. */
class BaseMagomachyGame extends mixed.Game {}

/** The base GameManager class for the Magomachy game will mixin logic. */
class BaseMagomachyGameManager extends mixed.GameManager {}

/** The base GameObject class for the Magomachy game will mixin logic. */
class BaseMagomachyGameObject extends mixed.GameObject {}

/** The base GameSettings class for the Magomachy game will mixin logic. */
class BaseMagomachyGameSettings extends mixed.GameSettings {}

/** The Base classes that game classes build off of. */
export const BaseClasses = {
    AI: BaseMagomachyAI,
    Game: BaseMagomachyGame,
    GameManager: BaseMagomachyGameManager,
    GameObject: BaseMagomachyGameObject,
    GameSettings: BaseMagomachyGameSettings,
};

// Now all the base classes are created;
// so we can start importing/exporting the classes that need them.

/** All the possible properties for GameObject instances. */
export interface GameObjectProperties {}

/** All the possible properties for Item instances. */
export interface ItemProperties {
    /**
     * The type of Item this is.
     */
    form?: string;

    /**
     * How many turns this item has existed for.
     */
    lifetime?: number;

    /**
     * The Tile this Item is on.
     */
    tile?: Tile;
}

/** All the possible properties for Player instances. */
export interface PlayerProperties {
    /**
     * What type of client this is, e.g. 'Python', 'JavaScript', or some other
     * language. For potential data mining purposes.
     */
    clientType?: string;

    /**
     * If the player lost the game or not.
     */
    lost?: boolean;

    /**
     * The name of the player.
     */
    name?: string;

    /**
     * This player's opponent in the game.
     */
    opponent?: Player;

    /**
     * The reason why the player lost the game.
     */
    reasonLost?: string;

    /**
     * The reason why the player won the game.
     */
    reasonWon?: string;

    /**
     * The amount of time (in ns) remaining for this AI to send commands.
     */
    timeRemaining?: number;

    /**
     * The specific wizard owned by the player.
     */
    wizard?: Wizard;

    /**
     * If the player won the game or not.
     */
    won?: boolean;
}

/**
 * Argument overrides for Player's chooseWizard function. If you return an
 * object of this interface from the invalidate functions, the value(s) you set
 * will be used in the actual function.
 */
export interface PlayerChooseWizardArgs {
    /**
     * The class of wizard the player wants.
     */
    wizardClass?: string;
}

/** All the possible properties for Tile instances. */
export interface TileProperties {
    /**
     * The Item on this Tile if present, otherwise undefined.
     */
    object?: Item;

    /**
     * The Tile to the 'East' of this one (x+1, y). Undefined if out of bounds
     * of the map.
     */
    tileEast?: Tile;

    /**
     * The Tile to the 'North' of this one (x, y-1). Undefined if out of bounds
     * of the map.
     */
    tileNorth?: Tile;

    /**
     * The Tile to the 'South' of this one (x, y+1). Undefined if out of bounds
     * of the map.
     */
    tileSouth?: Tile;

    /**
     * The Tile to the 'West' of this one (x-1, y). Undefined if out of bounds
     * of the map.
     */
    tileWest?: Tile;

    /**
     * The type of Tile this is (i.e Grass, Wall).
     */
    type?: "floor" | "wall";

    /**
     * The Wizard on this Tile if present, otherwise undefined.
     */
    wizard?: Wizard;

    /**
     * The x (horizontal) position of this Tile.
     */
    x?: number;

    /**
     * The y (vertical) position of this Tile.
     */
    y?: number;
}

/** All the possible properties for Wizard instances. */
export interface WizardProperties {
    /**
     * The amount of spell resources this Player has.
     */
    aether?: number;

    /**
     * The attack value of the player.
     */
    attack?: number;

    /**
     * The defense value of the player.
     */
    defense?: number;

    /**
     * The direction this Wizard is facing.
     */
    direction?: number;

    /**
     * The turns remaining on each active effects on Wizard.
     */
    effectTimes?: number[];

    /**
     * The names of active effects on the Wizard.
     */
    effects?: string[];

    /**
     * Whether or not this Wizard has cast a spell this turn.
     */
    hasCast?: boolean;

    /**
     * The amount of health this player has.
     */
    health?: number;

    /**
     * The spell this wizard just casted. Undefined if no spell was cast.
     */
    lastSpell?: string;

    /**
     * The tile this wizard just cast to. Undefined if no tile was targeted.
     */
    lastTargetTile?: Tile;

    /**
     * How much movement the wizard has left.
     */
    movementLeft?: number;

    /**
     * The Player that owns and can control this Unit, or undefined if the Unit
     * is neutral.
     */
    owner?: Player;

    /**
     * Specific type of Wizard.
     */
    specialty?: "aggressive" | "defensive" | "sustaining" | "strategic";

    /**
     * The speed of the player.
     */
    speed?: number;

    /**
     * The Tile that this Wizard is on.
     */
    tile?: Tile;
}

/**
 * Argument overrides for Wizard's cast function. If you return an object of
 * this interface from the invalidate functions, the value(s) you set will be
 * used in the actual function.
 */
export interface WizardCastArgs {
    /**
     * The name of the spell to cast.
     */
    spellName?: string;
    /**
     * The Tile to aim the spell toward.
     */
    tile?: Tile;
}

/**
 * Argument overrides for Wizard's move function. If you return an object of
 * this interface from the invalidate functions, the value(s) you set will be
 * used in the actual function.
 */
export interface WizardMoveArgs {
    /**
     * The Tile this Wizard should move to.
     */
    tile?: Tile;
}

/**
 * The default args passed to a constructor function for class
 * instances of GameObject.
 */
export type GameObjectConstructorArgs<
    T extends Record<string, unknown> = Record<string, unknown>
> = Readonly<GameObjectProperties & T>;

/**
 * The default args passed to a constructor function for class
 * instances of Item.
 */
export type ItemConstructorArgs<
    T extends Record<string, unknown> = Record<string, unknown>
> = Readonly<ItemProperties & T>;

/**
 * The default args passed to a constructor function for class
 * instances of Player.
 */
export type PlayerConstructorArgs<
    T extends Record<string, unknown> = Record<string, unknown>
> = Readonly<BaseMagomachyPlayer & PlayerProperties & T>;

/**
 * The default args passed to a constructor function for class
 * instances of Tile.
 */
export type TileConstructorArgs<
    T extends Record<string, unknown> = Record<string, unknown>
> = Readonly<TileProperties & T>;

/**
 * The default args passed to a constructor function for class
 * instances of Wizard.
 */
export type WizardConstructorArgs<
    T extends Record<string, unknown> = Record<string, unknown>
> = Readonly<WizardProperties & T>;

export * from "./game-object";
export * from "./item";
export * from "./player";
export * from "./tile";
export * from "./wizard";
export * from "./game";
export * from "./game-manager";
export * from "./ai";

import { GameObject } from "./game-object";
import { Item } from "./item";
import { Player } from "./player";
import { Tile } from "./tile";
import { Wizard } from "./wizard";

import { AI } from "./ai";
import { MagomachyGame } from "./game";
import { MagomachyGameManager } from "./game-manager";
import { MagomachyGameSettingsManager } from "./game-settings";

/** The arguments used to construct a Item. */
export type ItemArgs = FirstArgumentFromConstructor<typeof Item>;

/** The arguments used to construct a Tile. */
export type TileArgs = FirstArgumentFromConstructor<typeof Tile>;

/** The arguments used to construct a Wizard. */
export type WizardArgs = FirstArgumentFromConstructor<typeof Wizard>;

/**
 * The factory that **must** be used to create any game objects in
 * the Magomachy game.
 */
export class MagomachyGameObjectFactory extends BaseGameObjectFactory {
    /**
     * Creates a new Item in the Game and tracks it for all players.
     *
     * @param args - Data about the Item to set. Any keys matching a property in
     * the game object's class will be automatically set for you.
     * @returns A new Item hooked up in the game and ready for you to use.
     */
    public item<T extends ItemArgs>(args: Readonly<T>): Item & T {
        return this.createGameObject("Item", Item, args);
    }

    /**
     * Creates a new Tile in the Game and tracks it for all players.
     *
     * @param args - Data about the Tile to set. Any keys matching a property in
     * the game object's class will be automatically set for you.
     * @returns A new Tile hooked up in the game and ready for you to use.
     */
    public tile<T extends TileArgs>(args: Readonly<T>): Tile & T {
        return this.createGameObject("Tile", Tile, args);
    }

    /**
     * Creates a new Wizard in the Game and tracks it for all players.
     *
     * @param args - Data about the Wizard to set. Any keys matching a property
     * in the game object's class will be automatically set for you.
     * @returns A new Wizard hooked up in the game and ready for you to use.
     */
    public wizard<T extends WizardArgs>(args: Readonly<T>): Wizard & T {
        return this.createGameObject("Wizard", Wizard, args);
    }
}

/**
 * The shared namespace for Magomachy that is used to
 * initialize each game instance.
 */
export const Namespace = makeNamespace({
    AI,
    Game: MagomachyGame,
    GameManager: MagomachyGameManager,
    GameObjectFactory: MagomachyGameObjectFactory,
    GameSettingsManager: MagomachyGameSettingsManager,
    Player,

    // These are generated metadata that allow delta-merging values from
    // clients.
    // They are never intended to be directly interfaced with outside of the
    // Cerveau core developers.
    gameName: "Magomachy",
    gameSettingsManager: new MagomachyGameSettingsManager(),
    gameObjectsSchema: {
        AI: {
            attributes: {},
            functions: {
                Action: {
                    args: [
                        {
                            argName: "wizard",
                            typeName: "gameObject",
                            gameObjectClass: Wizard,
                            nullable: false,
                        },
                    ],
                    returns: {
                        typeName: "int",
                    },
                },
                Move: {
                    args: [
                        {
                            argName: "wizard",
                            typeName: "gameObject",
                            gameObjectClass: Wizard,
                            nullable: false,
                        },
                    ],
                    returns: {
                        typeName: "int",
                    },
                },
                runTurn: {
                    args: [],
                    returns: {
                        typeName: "boolean",
                    },
                },
            },
        },
        Game: {
            attributes: {
                currentPlayer: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
                },
                currentTurn: {
                    typeName: "int",
                },
                gameObjects: {
                    typeName: "dictionary",
                    keyType: {
                        typeName: "string",
                    },
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: GameObject,
                        nullable: false,
                    },
                },
                mapHeight: {
                    typeName: "int",
                },
                mapWidth: {
                    typeName: "int",
                },
                maxTurns: {
                    typeName: "int",
                },
                players: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Player,
                        nullable: false,
                    },
                },
                session: {
                    typeName: "string",
                },
                tiles: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Tile,
                        nullable: false,
                    },
                },
                timeAddedPerTurn: {
                    typeName: "float",
                },
                wizards: {
                    typeName: "list",
                    valueType: {
                        typeName: "string",
                    },
                },
            },
            functions: {},
        },
        GameObject: {
            attributes: {
                gameObjectName: {
                    typeName: "string",
                },
                id: {
                    typeName: "string",
                },
                logs: {
                    typeName: "list",
                    valueType: {
                        typeName: "string",
                    },
                },
            },
            functions: {
                log: {
                    args: [
                        {
                            argName: "message",
                            typeName: "string",
                        },
                    ],
                    returns: {
                        typeName: "void",
                    },
                },
            },
        },
        Item: {
            parentClassName: "GameObject",
            attributes: {
                form: {
                    typeName: "string",
                },
                lifetime: {
                    typeName: "int",
                },
                tile: {
                    typeName: "gameObject",
                    gameObjectClass: Tile,
                    nullable: false,
                },
            },
            functions: {},
        },
        Player: {
            parentClassName: "GameObject",
            attributes: {
                clientType: {
                    typeName: "string",
                },
                lost: {
                    typeName: "boolean",
                },
                name: {
                    typeName: "string",
                },
                opponent: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
                },
                reasonLost: {
                    typeName: "string",
                },
                reasonWon: {
                    typeName: "string",
                },
                timeRemaining: {
                    typeName: "float",
                },
                wizard: {
                    typeName: "gameObject",
                    gameObjectClass: Wizard,
                    nullable: true,
                },
                won: {
                    typeName: "boolean",
                },
            },
            functions: {
                chooseWizard: {
                    args: [
                        {
                            argName: "wizardClass",
                            typeName: "string",
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
            },
        },
        Tile: {
            parentClassName: "GameObject",
            attributes: {
                object: {
                    typeName: "gameObject",
                    gameObjectClass: Item,
                    nullable: true,
                },
                tileEast: {
                    typeName: "gameObject",
                    gameObjectClass: Tile,
                    nullable: true,
                },
                tileNorth: {
                    typeName: "gameObject",
                    gameObjectClass: Tile,
                    nullable: true,
                },
                tileSouth: {
                    typeName: "gameObject",
                    gameObjectClass: Tile,
                    nullable: true,
                },
                tileWest: {
                    typeName: "gameObject",
                    gameObjectClass: Tile,
                    nullable: true,
                },
                type: {
                    typeName: "string",
                    defaultValue: "floor",
                    literals: ["floor", "wall"],
                },
                wizard: {
                    typeName: "gameObject",
                    gameObjectClass: Wizard,
                    nullable: true,
                },
                x: {
                    typeName: "int",
                },
                y: {
                    typeName: "int",
                },
            },
            functions: {},
        },
        Wizard: {
            parentClassName: "GameObject",
            attributes: {
                aether: {
                    typeName: "int",
                },
                attack: {
                    typeName: "int",
                },
                defense: {
                    typeName: "int",
                },
                direction: {
                    typeName: "int",
                },
                effectTimes: {
                    typeName: "list",
                    valueType: {
                        typeName: "int",
                    },
                },
                effects: {
                    typeName: "list",
                    valueType: {
                        typeName: "string",
                    },
                },
                hasCast: {
                    typeName: "boolean",
                },
                health: {
                    typeName: "int",
                },
                lastSpell: {
                    typeName: "string",
                },
                lastTargetTile: {
                    typeName: "gameObject",
                    gameObjectClass: Tile,
                    nullable: true,
                },
                movementLeft: {
                    typeName: "int",
                },
                owner: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: true,
                },
                specialty: {
                    typeName: "string",
                    defaultValue: "aggressive",
                    literals: [
                        "aggressive",
                        "defensive",
                        "sustaining",
                        "strategic",
                    ],
                },
                speed: {
                    typeName: "int",
                },
                tile: {
                    typeName: "gameObject",
                    gameObjectClass: Tile,
                    nullable: true,
                },
            },
            functions: {
                cast: {
                    args: [
                        {
                            argName: "spellName",
                            typeName: "string",
                        },
                        {
                            argName: "tile",
                            typeName: "gameObject",
                            gameObjectClass: Tile,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                move: {
                    args: [
                        {
                            argName: "tile",
                            typeName: "gameObject",
                            gameObjectClass: Tile,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
            },
        },
    },
    gameVersion:
        "65acc66b7843108091108f5cbd212836c6c154d3b2bc4c5e186d4a36d35e5257",
});
