import { createServer, Model } from "miragejs";

createServer({
    models: {
        products: Model,
    },

    seeds(server) {
        server.create("product", {
            name: "MacBook Air M2",
            manufacturer: "Apple",
            description: "Ultra-thin design and powerful M2 chip for high performance.",
            price: 1499,
        });
        server.create("product", {
            name: "Galaxy S23 Ultra",
            manufacturer: "Samsung",
            description: "Top-tier smartphone with 200 MP camera and Snapdragon 8 Gen 2.",
            price: 1299,
        });
        server.create("product", {
            name: "PlayStation 5",
            manufacturer: "Sony",
            description: "Powerful gaming console offering next-gen gaming experience.",
            price: 499,
        });
        server.create("product", {
            name: "iPad Pro M2",
            manufacturer: "Apple",
            description: "For creative professionals with leading display technology and M2 chip.",
            price: 1099,
        });
        server.create("product", {
            name: "Galaxy Book Pro",
            manufacturer: "Samsung",
            description: "Ultra-lightweight laptop with AMOLED display and Intel i7 processor.",
            price: 1399,
        });
    },

    routes() {
        this.namespace = "api";
        this.logging = false

        this.get("/products", (schema, request) => {
            return schema.products.all();
        });

        this.get("/products/:id", (schema, request) => {
            const id = request.params.id
            return schema.products.find(id);
        });
    },
});