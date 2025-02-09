const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class c
{
    #scale = 1;
    #rotationX = 0;
    #rotationY = 0;
    #rotationZ = 0;

    constructor()
    {
        // 3D cube vertices using right-hand coordinate system
        this.cubeVertices = 
        [
            [   // front
                new DOMPoint(-1,  1, 1), 
                new DOMPoint( 1,  1, 1), 
                new DOMPoint( 1, -1, 1), 
                new DOMPoint(-1, -1, 1) 
            ],
            [   // top
                new DOMPoint(-1, 1, -1), 
                new DOMPoint( 1, 1, -1), 
                new DOMPoint( 1, 1,  1), 
                new DOMPoint(-1, 1,  1) 
            ], 
            [   // left
                new DOMPoint(-1,  1, -1),
                new DOMPoint(-1,  1,  1),
                new DOMPoint(-1, -1,  1),
                new DOMPoint(-1, -1, -1)
            ], 
            [   // right
                new DOMPoint(1,  1,  1),
                new DOMPoint(1,  1, -1),
                new DOMPoint(1, -1, -1),
                new DOMPoint(1, -1,  1)
            ], 
            [   // bottom
                new DOMPoint(-1, -1,  1),
                new DOMPoint( 1, -1,  1),
                new DOMPoint( 1, -1, -1),
                new DOMPoint(-1, -1, -1)
                    ], 
            [   // rear
                new DOMPoint( 1,  1, -1), 
                new DOMPoint(-1,  1, -1), 
                new DOMPoint(-1, -1, -1), 
                new DOMPoint( 1, -1, -1) 
            ]
        ];
    }

    set Scale(scale) { this.#scale = scale; }
    get Scale() { return this.#scale; }

    set RotationX(angle) { this.#rotationX = angle; }
    get RotationX() { return this.#rotationX; }

    set RotationY(angle) { this.#rotationY = angle; }
    get RotationY() { return this.#rotationY; }

    set RotationZ(angle) { this.#rotationZ = angle; }
    get RotationZ() { return this.#rotationZ; }

    Render(c, rect)
    {
        // Save the state of the graphics context & clear rendering area
        c.save();
        c.clearRect(rect.x, rect.y, rect.width, rect.height);

        // Translate to center of rectangle
        c.translate(rect.x + rect.width / 2, rect.y + rect.height / 2);

        // Define 3D identity matrix; apply rotate and scale transforms
        const matrix = new DOMMatrix([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        matrix.rotateSelf(this.RotationX, this.RotationY, this.RotationZ);
        matrix.scaleSelf(this.Scale, this.Scale, this.Scale);

        // Loop through the six faces
        this.cubeVertices.forEach(faceVertices =>
        {
            // Use the 3D matrix to transform the face vertices
            const vertices = [];
            faceVertices.forEach(vertex => vertices.push(matrix.transformPoint(vertex)));

            // Draw the face with 2D points by negativizing Y and ignoring Z
            c.beginPath();
            c.moveTo(vertices[0].x, -vertices[0].y);            
            c.lineTo(vertices[1].x, -vertices[1].y);            
            c.lineTo(vertices[2].x, -vertices[2].y);            
            c.lineTo(vertices[3].x, -vertices[3].y);
            c.closePath();
                
            // Outline the path
            c.stroke();
        });

        c.restore();
    }
}