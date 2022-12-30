export class ColorSchema {
    static readonly DARK = new ColorSchema("DARK", "#000000C6");
    static readonly LIGHT = new ColorSchema("LIGHT", "#FFFFFF");
    static readonly DEFAULT = new ColorSchema("DEFAULT", "#581845c4");
    static readonly LANDING = new ColorSchema("LANDING", "#00000070");

    private constructor(private readonly key: string, public readonly mainColor: string) {
        
    }

    toString() {
        return this.key;
    }
}