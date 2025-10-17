CREATE DATABASE biblioteca_juegos;
USE biblioteca_juegos;

CREATE TABLE juegos (
  id 				INT 			AUTO_INCREMENT 		PRIMARY KEY,      -- ID único que se incrementa solo
  nombre 			VARCHAR(100) 	NOT NULL,            				  -- Nombre del juego (no puede estar vacío)
  plataforma 		VARCHAR(50) 	NOT NULL,         					  -- Ejemplo: "Steam", "Epic Games"
  url_imagen 		VARCHAR(500) 	NOT NULL,        					  -- URL de la imagen del juego
  fecha_adquirido 	DATE 			NOT NULL               				  -- Fecha en que se adquirió el juego
);

INSERT INTO juegos (nombre, plataforma, url_imagen, fecha_adquirido)
VALUES 
('Grand Theft Auto V', 'Steam', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKG6dY_AxIcpxSjUdYHtt3b-ef3BZfg53oNQ&s', '2025-05-01'),
('Fortnite', 'Epic Games', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqAM2EHM4zKmTbe4HzXu-4YLQiG2tXwBRCUw&s', '2025-07-15'),
('The Witcher 3', 'GOG', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhl1qmjhXwI8R86ZhPnu53ROZPdJUu-QiHA&s', '2025-08-10');

select * from juegos;

