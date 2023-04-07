import { ArrayNotEmpty, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Status } from "src/task.interface";

export class CreateTaskDto {
    @IsString({message: 'title обязателен для заполнения!'})
    @IsNotEmpty({message: 'поле title обязательно к заполнению!'})
    title: string;

    @IsEmail({}, {message: 'Некоректный емайл'})
    @IsString({message: 'Email обязателен'})
    email: string;

    @ArrayNotEmpty({message: 'Необхдимо указать теги!'})
    @IsString({each: true, message: 'Тип тегов должен быть сточным!'})
    tags: string[];

    @IsOptional()
    @IsEnum(Status, {message: 'Не верный тип статуса!'})
    status?: Status;

}