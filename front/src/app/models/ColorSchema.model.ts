export class ColorSchema {
    static readonly DARK = new ColorSchema("DARK", "#000000");
    static readonly LIGHT = new ColorSchema("LIGHT", "#FFFFFF");
    static readonly DEFAULT = new ColorSchema("DEFAULT", "#581845c4");

    private constructor(private readonly key: string, public readonly mainColor: string) {
        
    }

    toString() {
        return this.key;
    }
}

export class StyleProperty {
    
}