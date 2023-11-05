class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = this.normalizeType(type)
    }

    normalizeType(type) {
        const typeMapping = {
            "mage": "mage",
            "mago": "mage",
            "warrior": "warrior",
            "guerreiro": "warrior",
            "monk": "monk",
            "monge": "monk",
            "ninja": "ninja"
        };

        return typeMapping[type.toLowerCase()] || "unknown";
    }


    attacking() {
        let attack = ""
        switch (this.type) {
          case "mage":
            attack = "used magic";
            break;
          case "warrior":
            attack = "used sword";
            break;
          case "monk":
            attack = "used martial arts";
            break
          case "ninja":
            attack = "used shuriken";
            break;
          default:
            attack = "attack";
        }

        console.log(`The ${this.type} attacked using ${attack}`)
        return attack
    }
}
let mage = new hero("Alladin", 25, "guerreiro")
mage.attacking();
