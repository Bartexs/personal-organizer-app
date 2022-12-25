export class ColorSchema {
    static readonly DARK = new ColorSchema("DARK", "Some dark color value - main");
    static readonly LIGHT = new ColorSchema("LIGHT", "Some light color value - main");
    static readonly DEFAULT = new ColorSchema("DEFAULT", "Purple color");

    private constructor(private readonly key: string, public readonly mainColor: string) {
        
    }

    toString() {
        return this.key;
    }
}