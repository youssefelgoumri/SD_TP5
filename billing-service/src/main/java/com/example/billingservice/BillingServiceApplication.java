package com.example.billingservice;

import com.example.billingservice.entities.Bill;
import com.example.billingservice.entities.ProductItem;
import com.example.billingservice.feign.CustomerRestClient;
import com.example.billingservice.feign.ProductItemRestClient;
import com.example.billingservice.model.Customer;
import com.example.billingservice.model.Product;
import com.example.billingservice.repository.BillRepository;
import com.example.billingservice.repository.ProductItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.hateoas.PagedModel;

import java.util.Date;
import java.util.Random;

@SpringBootApplication
@EnableFeignClients
public class BillingServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(BillingServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner start(BillRepository billRepository,
                            ProductItemRepository productItemRepository,
                            CustomerRestClient customerRestClient,
                            ProductItemRestClient productItemRestClient,
                            RepositoryRestConfiguration restConfiguration){

        restConfiguration.exposeIdsFor(Bill.class);
        return args -> {
            Customer customer = customerRestClient.getCustomerById(1L);
            Customer customer2 = customerRestClient.getCustomerById(2L);
            /*
            System.out.println("--------------");
            System.out.println(customer.getId());
            System.out.println(customer.getName());
            System.out.println(customer.getEmail());
            */
            Bill bill1 = billRepository.save(new Bill(null,new Date(),null,customer.getId(),null));
            PagedModel<Product> productPagedModel = productItemRestClient.pageProducts();
            productPagedModel.forEach(p -> {
                ProductItem productItem = new ProductItem();
                productItem.setProductId(p.getId());
                productItem.setPrice(p.getPrice());
                productItem.setQuantity(1 + new Random().nextInt(100));
                productItem.setBill(bill1);
                productItemRepository.save(productItem);
            });

            Bill bill2 = billRepository.save(new Bill(null,new Date(),null,customer2.getId(),null));
            PagedModel<Product> productPagedModel2 = productItemRestClient.pageProducts();
            productPagedModel2.forEach(p -> {
                ProductItem productItem2 = new ProductItem();
                productItem2.setProductId(p.getId());
                productItem2.setPrice(p.getPrice());
                productItem2.setQuantity(1 + new Random().nextInt(100));
                productItem2.setBill(bill2);
                productItemRepository.save(productItem2);
            });

        };
    }
}
