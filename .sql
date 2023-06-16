CREATE DATABASE IF NOT EXISTS receitasplus;
USE receitasplus;

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    senha VARCHAR(255)
);

CREATE TABLE Produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    usuarioId INT,
    FOREIGN KEY (usuarioId) REFERENCES Usuario(id)
);

CREATE TABLE ReceitaIngrediente (
    receitaId INT,
    ingredienteId INT,
    quantidade INT,
    PRIMARY KEY (receitaId, ingredienteId),
    FOREIGN KEY (receitaId) REFERENCES Receita(id),
    FOREIGN KEY (ingredienteId) REFERENCES Ingrediente(id)
);

CREATE TABLE ProducaoDiaria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produtoId INT,
    quantidade INT,
    data DATE,
    FOREIGN KEY (produtoId) REFERENCES Produto(id)
);

CREATE TABLE Receita (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    produtoId INT,
    tempo_preparo VARCHAR(255),
    rendimento VARCHAR(255),
    modo_preparo VARCHAR(255),
    lucro_esperado DOUBLE,
    FOREIGN KEY (produtoId) REFERENCES Produto(id)
);

CREATE TABLE CustoOperacional (
    id INT AUTO_INCREMENT PRIMARY KEY,
    valor FLOAT,
    usuarioId INT,
    FOREIGN KEY (usuarioId) REFERENCES Usuario(id)
);

CREATE TABLE Ingrediente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    unidade_medida VARCHAR(255),
    preco DOUBLE
);
