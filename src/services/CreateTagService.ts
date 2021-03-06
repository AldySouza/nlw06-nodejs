import { getCustomRepository } from "typeorm"
import { TagRepositories } from "../repositories/TagsRepositories"



class CreateTagService {

  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagRepositories);

    if(!name) {
      throw new Error('Name field is empty!');
    }

    const tagAlreadyExists = await tagsRepositories.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error('Tags already exists!');
    }

    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };