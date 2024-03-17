
function apply(point, m) {
    var x = point.x * m[0][0] + point.y * m[0][1] + m[0][2];
    var y = point.x * m[1][0] + point.y * m[1][1] + m[1][2];
    return new point(x, y)
}


class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
    }

    static identity(size) {
        const identityMatrix = new Matrix(size, size);
        for (let i = 0; i < size; i++) {
            identityMatrix.data[i][i] = 1;
        }
        return identityMatrix;
    }

    static translate(dx, dy) {
        return new Matrix(3, 3).set([
            [1, 0, dx],
            [0, 1, dy],
            [0, 0, 1]
        ]);
    }

    static scale(sx, sy) {
        return new Matrix(3, 3).set([
            [sx, 0, 0],
            [0, sy, 0],
            [0, 0, 1]
        ]);
    }

    static rotate(theta) {
        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);
        return new Matrix(3, 3).set([
            [cosTheta, -sinTheta, 0],
            [sinTheta, cosTheta, 0],
            [0, 0, 1]
        ]);
    }

    set(matrix) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = matrix[i][j];
            }
        }
        return this;
    }

    multiply(other) {
        const result = new Matrix(this.rows, other.cols);
        if (this.cols !== other.rows) {
            throw new Error('Matrix dimensions do not match for multiplication.');
        }
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < other.cols; j++) {
                let sum = 0;
                for (let k = 0; k < this.cols; k++) {
                    sum += this.data[i][k] * other.data[k][j];
                }
                result.data[i][j] = sum;
            }
        }
        return result;
    }
}

// Example usage:
// const translationMatrix = Matrix.translate(2, 3);
// const scalingMatrix = Matrix.scale(2, 2);
// const rotationMatrix = Matrix.rotate(Math.PI / 4); // Rotate by 45 degrees
