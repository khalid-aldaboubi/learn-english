import type { Struct, Schema } from '@strapi/strapi';

export interface VocabularyWord extends Struct.ComponentSchema {
  collectionName: 'components_vocabulary_words';
  info: {
    displayName: 'word';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    word: Schema.Attribute.String;
    choice_1: Schema.Attribute.String;
    choice_2: Schema.Attribute.String;
    choice_3: Schema.Attribute.String;
    choice_4: Schema.Attribute.String;
    choice_5: Schema.Attribute.String;
    choice_6: Schema.Attribute.String;
    choice_7: Schema.Attribute.String;
    choice_8: Schema.Attribute.String;
    choice_9: Schema.Attribute.String;
    hint: Schema.Attribute.Text;
    section: Schema.Attribute.Enumeration<
      [
        'section_1',
        'section_2',
        'section_3',
        'section_4',
        'section_5',
        'section_6',
        'section_7',
        'section_8',
        'section_9',
        'section_10',
      ]
    >;
  };
}

export interface VocabularyVoice extends Struct.ComponentSchema {
  collectionName: 'components_vocabulary_voices';
  info: {
    displayName: 'voice';
    icon: 'headphone';
  };
  attributes: {
    image_1: Schema.Attribute.Media<'images' | 'files'>;
    image_2: Schema.Attribute.Media<'images' | 'files'>;
    image_3: Schema.Attribute.Media<'images' | 'files'>;
    image_4: Schema.Attribute.Media<'images' | 'files'>;
    hint: Schema.Attribute.Text;
    section: Schema.Attribute.Enumeration<
      [
        'section_1',
        'section_2',
        'section_3',
        'section_4',
        'section_5',
        'section_6',
        'section_7',
        'section_8',
        'section_9',
        'section_10',
      ]
    >;
    voice: Schema.Attribute.Media<'files' | 'audios'>;
  };
}

export interface VocabularyImage extends Struct.ComponentSchema {
  collectionName: 'components_vocabulary_images';
  info: {
    displayName: 'image';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    voice: Schema.Attribute.Media<'files' | 'audios'>;
    choice_1: Schema.Attribute.String;
    choice_2: Schema.Attribute.String;
    choice_3: Schema.Attribute.String;
    choice_4: Schema.Attribute.String;
    hint: Schema.Attribute.Text;
    section: Schema.Attribute.Enumeration<
      [
        'section_1',
        'section_2',
        'section_3',
        'section_4',
        'section_5',
        'section_6',
        'section_7',
        'section_8',
        'section_9',
        'section_10',
      ]
    >;
  };
}

export interface SharedWritingWord extends Struct.ComponentSchema {
  collectionName: 'components_shared_writing_words';
  info: {
    displayName: 'writing_word';
    icon: 'brush';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    choice_1: Schema.Attribute.String;
    choice_2: Schema.Attribute.String;
    choice_3: Schema.Attribute.String;
    choice_4: Schema.Attribute.String;
    choice_5: Schema.Attribute.String;
    choice_6: Schema.Attribute.String;
    choice_7: Schema.Attribute.String;
    choice_8: Schema.Attribute.String;
    choice_9: Schema.Attribute.String;
    correct_answers: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'choice_1',
          'choice_2',
          'choice_3',
          'choice_4',
          'choice_5',
          'choice_6',
          'choice_7',
          'choice_8',
          'choice_9',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    hint: Schema.Attribute.Text;
    section: Schema.Attribute.Enumeration<
      [
        'section_1',
        'section_2',
        'section_3',
        'section_4',
        'section_5',
        'section_6',
        'section_7',
        'section_8',
        'section_9',
        'section_10',
      ]
    >;
  };
}

export interface SharedWritingTransalte extends Struct.ComponentSchema {
  collectionName: 'components_shared_writing_transaltes';
  info: {
    displayName: 'writing_transalte';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
    correct_answer: Schema.Attribute.Text;
    hint: Schema.Attribute.Text;
    section: Schema.Attribute.Enumeration<
      [
        'section_1',
        'section_2',
        'section_3',
        'section_4',
        'section_5',
        'section_6',
        'section_7',
        'section_8',
        'section_9',
        'section_10',
      ]
    >;
  };
}

export interface SharedWritingParagraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_writing_paragraphs';
  info: {
    displayName: 'writing_paragraph';
    icon: 'layer';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    correct_answer: Schema.Attribute.Text;
    hint: Schema.Attribute.Text;
    section: Schema.Attribute.Enumeration<
      [
        'section_1',
        'section_2',
        'section_3',
        'section_4',
        'section_5',
        'section_6',
        'section_7',
        'section_8',
        'section_9',
        'section_10',
      ]
    >;
  };
}

export interface SharedWritingCharacters extends Struct.ComponentSchema {
  collectionName: 'components_shared_writing_characters';
  info: {
    displayName: 'writing_characters';
    icon: 'underline';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    character_1: Schema.Attribute.String;
    character_2: Schema.Attribute.String;
    character_3: Schema.Attribute.String;
    character_4: Schema.Attribute.String;
    character_5: Schema.Attribute.String;
    character_6: Schema.Attribute.String;
    character_7: Schema.Attribute.String;
    character_8: Schema.Attribute.String;
    character_9: Schema.Attribute.String;
    character_10: Schema.Attribute.String;
    correct_answers: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'character_1',
          'character_2',
          'character_3',
          'character_4',
          'character_5',
          'character_6',
          'character_7',
          'character_8',
          'character_9',
          'character_10',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    hint: Schema.Attribute.Text;
    section: Schema.Attribute.Enumeration<
      [
        'section_1',
        'section_2',
        'section_3',
        'section_4',
        'section_5',
        'section_6',
        'section_7',
        'section_8',
        'section_9',
        'section_10',
      ]
    >;
  };
}

export interface SharedWord extends Struct.ComponentSchema {
  collectionName: 'components_shared_words';
  info: {
    displayName: 'Word';
    icon: 'volumeUp';
    description: '';
  };
  attributes: {
    voice: Schema.Attribute.Media<'files' | 'audios'>;
    choice_1: Schema.Attribute.String;
    choice_2: Schema.Attribute.String;
    choice_3: Schema.Attribute.String;
    choice_4: Schema.Attribute.String;
    correct_answer: Schema.Attribute.Enumeration<
      ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4']
    >;
    hint: Schema.Attribute.Text;
    sort: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface SharedVocabularyMatches extends Struct.ComponentSchema {
  collectionName: 'components_shared_vocabulary_matches';
  info: {
    displayName: 'vocabulary_matches';
    icon: 'rotate';
    description: '';
  };
  attributes: {
    image_1: Schema.Attribute.Media<'images' | 'files'>;
    image_2: Schema.Attribute.Media<'images' | 'files'>;
    image_3: Schema.Attribute.Media<'images' | 'files'>;
    image_4: Schema.Attribute.Media<'images' | 'files'>;
    choice_1: Schema.Attribute.Enumeration<
      ['image_1', 'image_2', 'image_3', 'image_4']
    >;
    choice_2: Schema.Attribute.Enumeration<
      ['image_1', 'image_2', 'image_3', 'image_4']
    >;
    choice_3: Schema.Attribute.Enumeration<
      ['image_1', 'image_2', 'image_3', 'image_4']
    >;
    choice_4: Schema.Attribute.Enumeration<
      ['image_1', 'image_2', 'image_3', 'image_4']
    >;
    hint: Schema.Attribute.Text;
    section: Schema.Attribute.Enumeration<
      [
        'section_1',
        'section_2',
        'section_3',
        'section_4',
        'section_5',
        'section_6',
        'section_7',
        'section_8',
        'section_9',
        'section_10',
      ]
    >;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'Section';
    icon: 'attachment';
  };
  attributes: {
    Word: Schema.Attribute.Component<'shared.writing-word', true>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
    icon: 'picture';
    description: '';
  };
  attributes: {
    voice: Schema.Attribute.Media<'files' | 'audios'>;
    choice_1: Schema.Attribute.Media<'images' | 'files'>;
    choice_2: Schema.Attribute.Media<'images' | 'files'>;
    choice_3: Schema.Attribute.Media<'images' | 'files'>;
    choice_4: Schema.Attribute.Media<'images' | 'files'>;
    correct_answer: Schema.Attribute.Enumeration<
      ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4']
    >;
    hint: Schema.Attribute.Text;
    sort: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface SharedDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_descriptions';
  info: {
    displayName: 'Description';
    icon: 'message';
    description: '';
  };
  attributes: {
    voice: Schema.Attribute.Media<'files' | 'audios'>;
    paragraph: Schema.Attribute.Text;
    choice_1: Schema.Attribute.String;
    choice_2: Schema.Attribute.String;
    choice_3: Schema.Attribute.String;
    choice_4: Schema.Attribute.String;
    choice_5: Schema.Attribute.String;
    choice_6: Schema.Attribute.String;
    choice_7: Schema.Attribute.String;
    correct_answers: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Choice 1',
          'Choice 2',
          'Choice 3',
          'Choice 4',
          'Choice 5',
          'Choice 6',
          'Choice 7',
        ]
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    sort: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface SpeakingParagraph extends Struct.ComponentSchema {
  collectionName: 'components_speaking_paragraphs';
  info: {
    displayName: 'paragraph';
    icon: 'volumeUp';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
    correct_answer: Schema.Attribute.Text;
    hint: Schema.Attribute.Text;
    section: Schema.Attribute.Enumeration<
      [
        'section_1',
        'section_2',
        'section_3',
        'section_4',
        'section_5',
        'section_6',
        'section_7',
        'section_8',
        'section_9',
        'section_10',
      ]
    >;
  };
}

export interface ReadingParagraph extends Struct.ComponentSchema {
  collectionName: 'components_reading_paragraphs';
  info: {
    displayName: 'paragraph';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
    hint: Schema.Attribute.Text;
    section: Schema.Attribute.Enumeration<
      [
        'section_1',
        'section_2',
        'section_3',
        'section_4',
        'section_5',
        'section_6',
        'section_7',
        'section_8',
        'section_9',
        'section_10',
      ]
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'vocabulary.word': VocabularyWord;
      'vocabulary.voice': VocabularyVoice;
      'vocabulary.image': VocabularyImage;
      'shared.writing-word': SharedWritingWord;
      'shared.writing-transalte': SharedWritingTransalte;
      'shared.writing-paragraph': SharedWritingParagraph;
      'shared.writing-characters': SharedWritingCharacters;
      'shared.word': SharedWord;
      'shared.vocabulary-matches': SharedVocabularyMatches;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.section': SharedSection;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'shared.image': SharedImage;
      'shared.description': SharedDescription;
      'speaking.paragraph': SpeakingParagraph;
      'reading.paragraph': ReadingParagraph;
    }
  }
}
