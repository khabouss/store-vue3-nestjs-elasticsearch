import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

type dataResponse = {
  id: number;
  title: string;
  description: string;
  price: string;
  rating: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type mindataResponse = {
  title: string;
  description: string;
  price: string;
  rating: string;
  brand: string;
  category: string;
  images: string;
};

@Injectable()
export class SearchService {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly configService: ConfigService,
  ) {}

  async search(search: {key: string}) {
    let results = new Set();
    
    const response = await this.esService.search({
      index: this.configService.get('ELASTICSEARCH_INDEX'),
      size:100,
      query: {
        match: search
      },
    });
    
    const hits = response.hits.hits;
    hits.map((item) => {
      results.add(item._source as dataResponse);
    });

    return { results: Array.from(results), total: response.hits.total };
  }

  async getall(search: {key: string}) {
    let results = new Set();
    
    const response = await this.esService.search({
      index: this.configService.get('ELASTICSEARCH_INDEX'),
      size:100
    });
    
    const hits = response.hits.hits;
    hits.map((item) => {
      results.add(item._source as dataResponse);
    });

    return { results: Array.from(results), total: response.hits.total };
  }

  async addpro(details: {key: string}) {
    
    const {Client} = require('@elastic/elasticsearch');
    const client = new Client({
      node: 'https://localhost:9200',
      auth: {
        username: 'elastic',
        password: 'RHLKbPpalvabwbKqnr6G'
      },
      tls: {
        ca: './http_ca.crt',
        rejectUnauthorized: false
      }
    });

    await client.index({
      index: 'products',
      document: details
    })
    await client.indices.refresh({ index: 'products' });
    return 'true';
  }
}
